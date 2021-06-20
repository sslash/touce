import { useState } from 'react'
import errorHandler from '../utils/errors'
import { createLogger } from '../utils/logger'

const log = createLogger('🔎', 'search')

export enum ApiState {
	Loading = 1,
	Error = 2,
	Success = 3,
	Idle = 4,
}

export enum ApiError {
	ServiceUnavailable,
	AuthenticationError,
	UnkownError,
}

interface State<T> {
	apiState: ApiState
	error: ApiError
	results: T[]
}

const INITIAL_STATE = {
	apiState: ApiState.Idle,
	error: null,
	results: [],
}

interface ReturnType<T> {
	results: T[]
	apiState: ApiState
	error: ApiError | null
	search: (q: string) => Promise<void>
}

/**
 * Usage:
 *
 * const {search, results, error, apiState} = useSearchQuery(q => fetch(`api.music.com/query?q=${q}`))
 *
 * // down the line...
 * search('epic playlist')
 *
 * // in render
 * results.map(playlist => <Body>{playlist.title}</Body>)
 *
 * @param searchFn function that returns a promise that yields
 * search results of your type.
 */
function useSearchQuery<T>(searchFn: (q: string) => Promise<T[]>): ReturnType<T> {
	const [state, setState] = useState<State<T>>(INITIAL_STATE)

	async function search(query: string) {
		log.log('Search initiated', { query }, true)
		// if we submit with empty string we should clear the results
		if (query === '') {
			setState((s) => ({ ...s, results: [], error: null }))
		}

		setState((s) => ({ ...s, apiState: ApiState.Loading, error: null }))

		try {
			const results = (await searchFn(query)) || []

			setState({ ...state, results, apiState: ApiState.Success })
		} catch (error) {
			errorHandler.reportError(error)
			const errorState = [401, 403].includes(error.httpStatus)
				? ApiError.AuthenticationError
				: error.httpStatus >= 500
				? ApiError.ServiceUnavailable
				: ApiError.UnkownError
			setState({ ...state, apiState: ApiState.Error, error: errorState })
		}
	}

	return { ...state, search }
}

export default useSearchQuery
