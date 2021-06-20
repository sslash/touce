import { onError } from '@apollo/client/link/error'
import { localizedStrings } from '../../localization/localizedStrings'
import { useBroadcastMessages } from '../../store/broadcastMessages'
import { createLogger } from '../logger'

const logger = createLogger('🛑', 'Apollo client')

let lastNetworkError: number | null = null
const ERROR_DELAY = 60
const OFFLINE_ERROR = 'Network request failed'

// let it pass ERROR_DELAY seconds
// before we show the error again
function allowShowNewError() {
	if (lastNetworkError) {
		return Date.now() - lastNetworkError > 1000 * ERROR_DELAY
	}
	return true
}

function showNetworkErrorMessage() {
	lastNetworkError = Date.now()
	useBroadcastMessages.getState().showMessage({
		message: localizedStrings.errors.network,
	})
}

const errors = onError(({ graphQLErrors, networkError }) => {
	// show offline error warning
	if (networkError && networkError.message === OFFLINE_ERROR && allowShowNewError()) {
		showNetworkErrorMessage()
	}

	logger.log(`${networkError?.message}`, graphQLErrors)
})

export default errors
