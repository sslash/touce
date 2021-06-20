import { delay } from './delay'
import errorHandler from './errors'

export async function retry<T>(
	fn: () => Promise<T>,
	retries = 10,
	errorMessage: string,
	timeout = 1
): Promise<T> {
	return new Promise((resolve, reject) => {
		async function runRetryLoop(counter: number): Promise<T> {
			try {
				return await fn()
			} catch (err) {
				if (counter >= retries) {
					throw new Error(errorMessage)
				} else {
					return await delay(() => runRetryLoop(counter + 1), timeout)
				}
			}
		}

		try {
			const result = runRetryLoop(0)
			resolve(result)
		} catch (error) {
			errorHandler.reportError(error)
			reject()
		}
	})
}
