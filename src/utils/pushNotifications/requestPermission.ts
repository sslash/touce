import messaging from '@react-native-firebase/messaging'
import errorHandler from '../errors'
import { createLogger } from '../logger'

const log = createLogger('📣', 'Request Push permission')

/**
 *
 * @returns enabled whether the user has enabled push notifications
 */
export async function requestUserPermission(): Promise<boolean> {
	try {
		log.log('requesting', undefined, true)
		const authStatus = await messaging().requestPermission({
			sound: false,
		})

		const enabled =
			authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
			authStatus === messaging.AuthorizationStatus.PROVISIONAL

		log.log('Auth status', { authStatus, enabled }, true)

		return enabled
	} catch (error) {
		errorHandler.reportError(error)
		return false
	}
}
