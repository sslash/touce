import { RetryLink } from '@apollo/client/link/retry'

// TODO import actual graphql typename here
const RETRY_BLACKLIST = ['applyAuthCode']

const retry = new RetryLink({
	delay: {
		initial: 300,
		max: Infinity,
		jitter: true,
	},
	attempts: {
		max: 5,
		retryIf: (error, _operation) => {
			if (RETRY_BLACKLIST.includes(_operation.operationName)) {
				return false
			}
			return true
		},
	},
})

export default retry
