import { useState } from 'react'
import { createLogger } from '../../utils/logger'
import errorHandler from '../../utils/errors'
import { useIsMounted } from '../useIsMounted'
import { ApiError, isFetchError } from '../../models/errors'

const log = createLogger('🔎', 'search')

enum ApiState {
	Loading = 1,
	Error = 2,
	Success = 3,
	Idle = 4,
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

function useSearchQuery<T>(searchFn: (q: string) => Promise<T[]>): ReturnType<T> {
	const [state, setState] = useState<State<T>>(INITIAL_STATE)
	const isMounted = useIsMounted()

	async function search(query: string) {
		log.log('Search initiated', { query }, true)
		// if we submit with empty string we should clear the results
		if (query === '') {
			setState((s) => ({ ...s, results: [], error: null }))
		}

		setState((s) => ({ ...s, apiState: ApiState.Loading, error: null }))

		try {
			const results = (await searchFn(query)) || []
			log.log('Search result', { count: results.length }, true)

			safeSetState({ ...state, results, apiState: ApiState.Success })
		} catch (error) {
			errorHandler.reportError(error)

			const errorState = isFetchError(error)
				? [401, 403].includes(error.status)
					? ApiError.AuthenticationError
					: error.status >= 500
					? ApiError.ServiceUnavailable
					: ApiError.UnkownError
				: ApiError.UnkownError

			safeSetState({ ...state, apiState: ApiState.Error, error: errorState })
		}
	}

	function safeSetState(s: State<T>): void {
		if (isMounted.current) {
			setState(s)
		}
	}

	return { ...state, search }
}

export default useSearchQuery
