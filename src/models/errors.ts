export enum ApiError {
	ServiceUnavailable = 'ServiceUnavailable',
	AuthenticationError = 'AuthenticationError',
	UnkownError = 'UnkownError',
}

export class FetchError extends Error {
	status: number

	constructor(msg: string, status: number) {
		super(msg)
		this.status = status

		Object.setPrototypeOf(this, FetchError.prototype)
	}
}

export function isFetchError(error: Error): error is FetchError {
	return error instanceof Error && error.hasOwnProperty('status')
}
