import { FetchError } from './../models/errors'
import errorHandler from './errors'
import { createLogger } from './logger'

const log = createLogger('📡', 'fetch')

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface Args {
	url: string
	method?: HttpMethod
	body?: Record<string, string | number | boolean>
	headers?: Record<string, string>
}

export async function httpFetch<T>({
	url,
	method = 'GET',
	body = undefined,
	headers = {},
}: Args): Promise<T> {
	log.log('Fetching data', { url }, true)

	try {
		const res = await fetch(url, {
			method,
			body: typeof body === 'object' ? JSON.stringify(body) : undefined,
			mode: 'cors',
			headers: {
				'Content-type': 'application/json',
				...headers,
			},
		})

		if (!res.ok) {
			let errorMsg = res.statusText
			try {
				errorMsg = await res.text()
			} catch (_) {}
			throw new FetchError(errorMsg, res.status)
		}

		return (await res.json()) as T
	} catch (err) {
		errorHandler.reportError(err)
		throw err
	}
}
