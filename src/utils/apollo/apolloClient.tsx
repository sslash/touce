import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import sentryLink from './sentryClient'
import auth from './auth'
import errors from './errors'
import retry from './retry'
import config from '../config/config'
import { FullChannelResult } from '../../queries/autogenerate/schemas'

class ApolloClientManager {
	private _client: ApolloClient<any>

	constructor() {
		this.createClient()
	}

	createClient() {
		const http = new HttpLink({ uri: config.graphqlApi })

		// sentryLink, retry, auth, errors,
		const link = from([sentryLink, retry, auth, errors, http])

		this._client = new ApolloClient({
			link,
			cache: new InMemoryCache({
				typePolicies: {
					Query: {
						fields: {
							fullChannel: {
								keyArgs: [],
								merge(
									existing: FullChannelResult,
									incoming: FullChannelResult,
									{ args: { offset = 0 } }
								) {
									const _offset = offset as number
									const oldEps = existing?.channel.episodes ?? []
									const newEps = incoming?.channel.episodes ?? []

									// Slicing is necessary because the existing data is
									// immutable, and frozen in development.
									const merged = oldEps.slice(0)
									for (let i = 0; i < newEps.length; ++i) {
										merged[_offset + i] = newEps[i]
									}

									return {
										...existing,
										channel: {
											...existing?.channel,
											episodes: merged,
										},
										pageInfo: incoming.pageInfo,
									}
								},
							},
						},
					},
				},
			}),
		})
	}

	get client() {
		return this._client
	}
}

const apolloManager = new ApolloClientManager()
export default apolloManager
