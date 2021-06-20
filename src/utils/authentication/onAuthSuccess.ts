import { ApolloCache, FetchResult } from '@apollo/client'
import _ from 'lodash'
import { GetMeDocument } from '../../queries/autogenerate/hooks'
import { GetMeQuery, LoggedInUserFragment } from '../../queries/autogenerate/operations'
import { createLogger } from '../logger'
import authToken from './authToken'

const logger = createLogger('👤', 'auth-success')

export const updateOnAuthSuccess = (keyPath: string) => (
	cache: ApolloCache<any>,
	res: FetchResult<any, Record<string, any>, Record<string, any>>
): void => {
	const user = _.get(res, keyPath) as LoggedInUserFragment
	const token = user?.token
	logger.log(`Successfull auth. Token length: ${token?.length}`, undefined, true)

	if (!token) {
		return
	}

	authToken.token = token

	cache.writeQuery<GetMeQuery>({
		query: GetMeDocument,
		data: {
			__typename: 'Query',
			me: user,
		},
	})
}
