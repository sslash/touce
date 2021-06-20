import { ApolloQueryResult } from '@apollo/client'
import { useGetMeQuery } from '../queries/autogenerate/hooks'
import { GetMeQuery } from '../queries/autogenerate/operations'
import apolloManager from '../utils/apollo/apolloClient'
import authToken from '../utils/authentication/authToken'

interface ReturnType {
	isLoading: boolean
	isLoggedIn: boolean
	user: GetMeQuery['me']
	logout: () => Promise<ApolloQueryResult<any>[]>
}

export const useIsLoggedIn = (): ReturnType => {
	const res = useGetMeQuery()
	const user = res.data?.me

	const isLoggedIn = !!user?.id

	const logout = (): Promise<ApolloQueryResult<any>[]> => {
		authToken.token = ''
		return apolloManager.client.resetStore()
	}

	return {
		isLoading: res.loading,
		isLoggedIn,
		logout,
		user,
	}
}
