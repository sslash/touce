import * as Sentry from '@sentry/react-native'
import config from './config/config'

class ErrorHandler {
	init = (): void => {
		Sentry.init({
			dsn: config.senryDSN,
			environment: __DEV__ ? 'development' : 'production',
			beforeSend(event, hint) {
				if (__DEV__) {
					// eslint-disable-next-line no-console
					console.log(hint.originalException)
					// eslint-disable-next-line no-console
					console.log(hint.syntheticException)
				}
				// Modify the event here
				if (event.user) {
					// Don't send user's email address
					// TODO: see if we should send this from settings
					delete event.user.email
				}
				return event
			},
			ignoreErrors: [
				// Random plugins/extensions
			],
		})
	}

	reportError = (error: Error) => {
		Sentry.captureException(error)
	}

	breadcrumb = (message: string, data: Record<string, any>) => {
		Sentry.addBreadcrumb({
			message,
			data,
		})
	}

	// TODO
	metaData = () => {}
}

const errorHandler = new ErrorHandler()

export default errorHandler
