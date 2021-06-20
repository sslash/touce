import errorHandler from './errors'

export class Logger {
	private name: string
	constructor(name: string) {
		this.name = name
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	log = (msg: string, args?: any, breadcrumb?: boolean): void => {
		if (!__DEV__) {
			return
		}
		// eslint-disable-next-line no-console
		console.log(`${this.name}:`, msg, args)

		if (breadcrumb) {
			errorHandler.breadcrumb(msg, args)
		}
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	error = (...args: any): void => {
		if (!__DEV__) {
			return
		}
		// eslint-disable-next-line no-console
		console.log(`${this.name} errored`)
		// eslint-disable-next-line no-console
		console.log(...args)
		// eslint-disable-next-line no-console
		console.trace()
	}
}

export const createLogger = (emoji: string = '📡', name: string): Logger => {
	return new Logger(`${emoji} ${name}`)
}
