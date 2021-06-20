import uuid from 'react-native-uuid'
import { localizedStrings } from '../../localization/localizedStrings'
import authToken from '../authentication/authToken'
import config from '../config/config'
import { ApolloLink } from '@apollo/client'

const auth = new ApolloLink((operation, forward) => {
	operation.setContext(({ headers = {} }) => {
		const token = authToken.token
		const transactionId = uuid.v4()

		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : '',
				'Accept-Language': localizedStrings.getLanguage(),
				'X-Transaction-ID': transactionId,
				'X-App-Version': config.version,
				'X-is-ios': global.IS_IOS,
				'X-app-secret': config.appSecret,
			},
		}
	})

	return forward(operation)
})

export default auth
