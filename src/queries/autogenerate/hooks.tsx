import * as Types from './operations'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export const LoggedInUserFragmentDoc = gql`
	fragment LoggedInUser on User {
		id
		token
		email
		googleUserId
		appleUserId
	}
`
export const CreateSignupCodeDocument = gql`
	mutation createSignupCode($email: String!) {
		createSignupCode(email: $email)
	}
`
export type CreateSignupCodeMutationFn = Apollo.MutationFunction<
	Types.CreateSignupCodeMutation,
	Types.CreateSignupCodeMutationVariables
>

/**
 * __useCreateSignupCodeMutation__
 *
 * To run a mutation, you first call `useCreateSignupCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSignupCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSignupCodeMutation, { data, loading, error }] = useCreateSignupCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateSignupCodeMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.CreateSignupCodeMutation,
		Types.CreateSignupCodeMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		Types.CreateSignupCodeMutation,
		Types.CreateSignupCodeMutationVariables
	>(CreateSignupCodeDocument, options)
}
export type CreateSignupCodeMutationHookResult = ReturnType<typeof useCreateSignupCodeMutation>
export type CreateSignupCodeMutationResult = Apollo.MutationResult<Types.CreateSignupCodeMutation>
export type CreateSignupCodeMutationOptions = Apollo.BaseMutationOptions<
	Types.CreateSignupCodeMutation,
	Types.CreateSignupCodeMutationVariables
>
export const CreateLoginCodeDocument = gql`
	mutation createLoginCode($email: String!) {
		createLoginCode(email: $email)
	}
`
export type CreateLoginCodeMutationFn = Apollo.MutationFunction<
	Types.CreateLoginCodeMutation,
	Types.CreateLoginCodeMutationVariables
>

/**
 * __useCreateLoginCodeMutation__
 *
 * To run a mutation, you first call `useCreateLoginCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLoginCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLoginCodeMutation, { data, loading, error }] = useCreateLoginCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateLoginCodeMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.CreateLoginCodeMutation,
		Types.CreateLoginCodeMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		Types.CreateLoginCodeMutation,
		Types.CreateLoginCodeMutationVariables
	>(CreateLoginCodeDocument, options)
}
export type CreateLoginCodeMutationHookResult = ReturnType<typeof useCreateLoginCodeMutation>
export type CreateLoginCodeMutationResult = Apollo.MutationResult<Types.CreateLoginCodeMutation>
export type CreateLoginCodeMutationOptions = Apollo.BaseMutationOptions<
	Types.CreateLoginCodeMutation,
	Types.CreateLoginCodeMutationVariables
>
export const ApplyAuthCodeDocument = gql`
	mutation applyAuthCode($email: String!, $code: String!) {
		applyAuthCode(email: $email, code: $code) {
			...LoggedInUser
		}
	}
	${LoggedInUserFragmentDoc}
`
export type ApplyAuthCodeMutationFn = Apollo.MutationFunction<
	Types.ApplyAuthCodeMutation,
	Types.ApplyAuthCodeMutationVariables
>

/**
 * __useApplyAuthCodeMutation__
 *
 * To run a mutation, you first call `useApplyAuthCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyAuthCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyAuthCodeMutation, { data, loading, error }] = useApplyAuthCodeMutation({
 *   variables: {
 *      email: // value for 'email'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useApplyAuthCodeMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.ApplyAuthCodeMutation,
		Types.ApplyAuthCodeMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<Types.ApplyAuthCodeMutation, Types.ApplyAuthCodeMutationVariables>(
		ApplyAuthCodeDocument,
		options
	)
}
export type ApplyAuthCodeMutationHookResult = ReturnType<typeof useApplyAuthCodeMutation>
export type ApplyAuthCodeMutationResult = Apollo.MutationResult<Types.ApplyAuthCodeMutation>
export type ApplyAuthCodeMutationOptions = Apollo.BaseMutationOptions<
	Types.ApplyAuthCodeMutation,
	Types.ApplyAuthCodeMutationVariables
>
export const CreateOauthUserDocument = gql`
	mutation createOauthUser($email: String!, $spotifyId: String!) {
		createOauthUser(email: $email, spotifyId: $spotifyId) {
			user {
				...LoggedInUser
			}
		}
	}
	${LoggedInUserFragmentDoc}
`
export type CreateOauthUserMutationFn = Apollo.MutationFunction<
	Types.CreateOauthUserMutation,
	Types.CreateOauthUserMutationVariables
>

/**
 * __useCreateOauthUserMutation__
 *
 * To run a mutation, you first call `useCreateOauthUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOauthUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOauthUserMutation, { data, loading, error }] = useCreateOauthUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      spotifyId: // value for 'spotifyId'
 *   },
 * });
 */
export function useCreateOauthUserMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.CreateOauthUserMutation,
		Types.CreateOauthUserMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		Types.CreateOauthUserMutation,
		Types.CreateOauthUserMutationVariables
	>(CreateOauthUserDocument, options)
}
export type CreateOauthUserMutationHookResult = ReturnType<typeof useCreateOauthUserMutation>
export type CreateOauthUserMutationResult = Apollo.MutationResult<Types.CreateOauthUserMutation>
export type CreateOauthUserMutationOptions = Apollo.BaseMutationOptions<
	Types.CreateOauthUserMutation,
	Types.CreateOauthUserMutationVariables
>
export const CreateAppleUserDocument = gql`
	mutation createAppleUser(
		$email: String!
		$name: String!
		$nonce: String!
		$identityToken: String!
		$userId: String!
		$pushToken: String
	) {
		createAppleUser(
			email: $email
			name: $name
			nonce: $nonce
			identityToken: $identityToken
			userId: $userId
			pushToken: $pushToken
		) {
			user {
				...LoggedInUser
			}
		}
	}
	${LoggedInUserFragmentDoc}
`
export type CreateAppleUserMutationFn = Apollo.MutationFunction<
	Types.CreateAppleUserMutation,
	Types.CreateAppleUserMutationVariables
>

/**
 * __useCreateAppleUserMutation__
 *
 * To run a mutation, you first call `useCreateAppleUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAppleUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAppleUserMutation, { data, loading, error }] = useCreateAppleUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      nonce: // value for 'nonce'
 *      identityToken: // value for 'identityToken'
 *      userId: // value for 'userId'
 *      pushToken: // value for 'pushToken'
 *   },
 * });
 */
export function useCreateAppleUserMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.CreateAppleUserMutation,
		Types.CreateAppleUserMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		Types.CreateAppleUserMutation,
		Types.CreateAppleUserMutationVariables
	>(CreateAppleUserDocument, options)
}
export type CreateAppleUserMutationHookResult = ReturnType<typeof useCreateAppleUserMutation>
export type CreateAppleUserMutationResult = Apollo.MutationResult<Types.CreateAppleUserMutation>
export type CreateAppleUserMutationOptions = Apollo.BaseMutationOptions<
	Types.CreateAppleUserMutation,
	Types.CreateAppleUserMutationVariables
>
export const LoginAppleUserDocument = gql`
	mutation loginAppleUser($nonce: String!, $identityToken: String!, $userId: String!) {
		loginAppleUser(nonce: $nonce, identityToken: $identityToken, userId: $userId) {
			user {
				...LoggedInUser
			}
		}
	}
	${LoggedInUserFragmentDoc}
`
export type LoginAppleUserMutationFn = Apollo.MutationFunction<
	Types.LoginAppleUserMutation,
	Types.LoginAppleUserMutationVariables
>

/**
 * __useLoginAppleUserMutation__
 *
 * To run a mutation, you first call `useLoginAppleUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginAppleUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginAppleUserMutation, { data, loading, error }] = useLoginAppleUserMutation({
 *   variables: {
 *      nonce: // value for 'nonce'
 *      identityToken: // value for 'identityToken'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLoginAppleUserMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.LoginAppleUserMutation,
		Types.LoginAppleUserMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<Types.LoginAppleUserMutation, Types.LoginAppleUserMutationVariables>(
		LoginAppleUserDocument,
		options
	)
}
export type LoginAppleUserMutationHookResult = ReturnType<typeof useLoginAppleUserMutation>
export type LoginAppleUserMutationResult = Apollo.MutationResult<Types.LoginAppleUserMutation>
export type LoginAppleUserMutationOptions = Apollo.BaseMutationOptions<
	Types.LoginAppleUserMutation,
	Types.LoginAppleUserMutationVariables
>
export const CreateGoogleUserDocument = gql`
	mutation createGoogleUser($googleId: String!, $idToken: String!) {
		createGoogleUser(googleId: $googleId, idToken: $idToken) {
			user {
				...LoggedInUser
			}
		}
	}
	${LoggedInUserFragmentDoc}
`
export type CreateGoogleUserMutationFn = Apollo.MutationFunction<
	Types.CreateGoogleUserMutation,
	Types.CreateGoogleUserMutationVariables
>

/**
 * __useCreateGoogleUserMutation__
 *
 * To run a mutation, you first call `useCreateGoogleUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGoogleUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGoogleUserMutation, { data, loading, error }] = useCreateGoogleUserMutation({
 *   variables: {
 *      googleId: // value for 'googleId'
 *      idToken: // value for 'idToken'
 *   },
 * });
 */
export function useCreateGoogleUserMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.CreateGoogleUserMutation,
		Types.CreateGoogleUserMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<
		Types.CreateGoogleUserMutation,
		Types.CreateGoogleUserMutationVariables
	>(CreateGoogleUserDocument, options)
}
export type CreateGoogleUserMutationHookResult = ReturnType<typeof useCreateGoogleUserMutation>
export type CreateGoogleUserMutationResult = Apollo.MutationResult<Types.CreateGoogleUserMutation>
export type CreateGoogleUserMutationOptions = Apollo.BaseMutationOptions<
	Types.CreateGoogleUserMutation,
	Types.CreateGoogleUserMutationVariables
>
export const GetMeDocument = gql`
	query getMe {
		me {
			...LoggedInUser
		}
	}
	${LoggedInUserFragmentDoc}
`

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
	baseOptions?: Apollo.QueryHookOptions<Types.GetMeQuery, Types.GetMeQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<Types.GetMeQuery, Types.GetMeQueryVariables>(GetMeDocument, options)
}
export function useGetMeLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<Types.GetMeQuery, Types.GetMeQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<Types.GetMeQuery, Types.GetMeQueryVariables>(GetMeDocument, options)
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>
export type GetMeQueryResult = Apollo.QueryResult<Types.GetMeQuery, Types.GetMeQueryVariables>
export const BootstrapDocument = gql`
	query Bootstrap {
		appConfig {
			upgradeNeeded
			featureFlags {
				id
				isOn
			}
		}
		me {
			...LoggedInUser
		}
	}
	${LoggedInUserFragmentDoc}
`

/**
 * __useBootstrapQuery__
 *
 * To run a query within a React component, call `useBootstrapQuery` and pass it any options that fit your needs.
 * When your component renders, `useBootstrapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBootstrapQuery({
 *   variables: {
 *   },
 * });
 */
export function useBootstrapQuery(
	baseOptions?: Apollo.QueryHookOptions<Types.BootstrapQuery, Types.BootstrapQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useQuery<Types.BootstrapQuery, Types.BootstrapQueryVariables>(
		BootstrapDocument,
		options
	)
}
export function useBootstrapLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<Types.BootstrapQuery, Types.BootstrapQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useLazyQuery<Types.BootstrapQuery, Types.BootstrapQueryVariables>(
		BootstrapDocument,
		options
	)
}
export type BootstrapQueryHookResult = ReturnType<typeof useBootstrapQuery>
export type BootstrapLazyQueryHookResult = ReturnType<typeof useBootstrapLazyQuery>
export type BootstrapQueryResult = Apollo.QueryResult<
	Types.BootstrapQuery,
	Types.BootstrapQueryVariables
>
export const StorePushTokenDocument = gql`
	mutation storePushToken($pushToken: String!, $timezoneOffset: Float!) {
		storePushToken(pushToken: $pushToken, timezoneOffset: $timezoneOffset)
	}
`
export type StorePushTokenMutationFn = Apollo.MutationFunction<
	Types.StorePushTokenMutation,
	Types.StorePushTokenMutationVariables
>

/**
 * __useStorePushTokenMutation__
 *
 * To run a mutation, you first call `useStorePushTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStorePushTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [storePushTokenMutation, { data, loading, error }] = useStorePushTokenMutation({
 *   variables: {
 *      pushToken: // value for 'pushToken'
 *      timezoneOffset: // value for 'timezoneOffset'
 *   },
 * });
 */
export function useStorePushTokenMutation(
	baseOptions?: Apollo.MutationHookOptions<
		Types.StorePushTokenMutation,
		Types.StorePushTokenMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions }
	return Apollo.useMutation<Types.StorePushTokenMutation, Types.StorePushTokenMutationVariables>(
		StorePushTokenDocument,
		options
	)
}
export type StorePushTokenMutationHookResult = ReturnType<typeof useStorePushTokenMutation>
export type StorePushTokenMutationResult = Apollo.MutationResult<Types.StorePushTokenMutation>
export type StorePushTokenMutationOptions = Apollo.BaseMutationOptions<
	Types.StorePushTokenMutation,
	Types.StorePushTokenMutationVariables
>
