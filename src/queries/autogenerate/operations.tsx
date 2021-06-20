import * as Types from './schemas'

export type CreateSignupCodeMutationVariables = Types.Exact<{
	email: Types.Scalars['String']
}>

export type CreateSignupCodeMutation = { __typename?: 'Mutation' } & Pick<
	Types.Mutation,
	'createSignupCode'
>

export type CreateLoginCodeMutationVariables = Types.Exact<{
	email: Types.Scalars['String']
}>

export type CreateLoginCodeMutation = { __typename?: 'Mutation' } & Pick<
	Types.Mutation,
	'createLoginCode'
>

export type ApplyAuthCodeMutationVariables = Types.Exact<{
	email: Types.Scalars['String']
	code: Types.Scalars['String']
}>

export type ApplyAuthCodeMutation = { __typename?: 'Mutation' } & {
	applyAuthCode: { __typename?: 'User' } & LoggedInUserFragment
}

export type CreateOauthUserMutationVariables = Types.Exact<{
	email: Types.Scalars['String']
	spotifyId: Types.Scalars['String']
}>

export type CreateOauthUserMutation = { __typename?: 'Mutation' } & {
	createOauthUser: { __typename?: 'OauthUserResult' } & {
		user: { __typename?: 'User' } & LoggedInUserFragment
	}
}

export type CreateAppleUserMutationVariables = Types.Exact<{
	email: Types.Scalars['String']
	name: Types.Scalars['String']
	nonce: Types.Scalars['String']
	identityToken: Types.Scalars['String']
	userId: Types.Scalars['String']
	pushToken?: Types.Maybe<Types.Scalars['String']>
}>

export type CreateAppleUserMutation = { __typename?: 'Mutation' } & {
	createAppleUser: { __typename?: 'OauthUserResult' } & {
		user: { __typename?: 'User' } & LoggedInUserFragment
	}
}

export type LoginAppleUserMutationVariables = Types.Exact<{
	nonce: Types.Scalars['String']
	identityToken: Types.Scalars['String']
	userId: Types.Scalars['String']
}>

export type LoginAppleUserMutation = { __typename?: 'Mutation' } & {
	loginAppleUser: { __typename?: 'OauthUserResult' } & {
		user: { __typename?: 'User' } & LoggedInUserFragment
	}
}

export type CreateGoogleUserMutationVariables = Types.Exact<{
	googleId: Types.Scalars['String']
	idToken: Types.Scalars['String']
}>

export type CreateGoogleUserMutation = { __typename?: 'Mutation' } & {
	createGoogleUser: { __typename?: 'OauthUserResult' } & {
		user: { __typename?: 'User' } & LoggedInUserFragment
	}
}

export type LoggedInUserFragment = { __typename?: 'User' } & Pick<
	Types.User,
	'id' | 'token' | 'email' | 'googleUserId' | 'appleUserId'
>

export type GetMeQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetMeQuery = { __typename?: 'Query' } & {
	me?: Types.Maybe<{ __typename?: 'User' } & LoggedInUserFragment>
}

export type BootstrapQueryVariables = Types.Exact<{ [key: string]: never }>

export type BootstrapQuery = { __typename?: 'Query' } & {
	appConfig: { __typename?: 'AppConfig' } & Pick<Types.AppConfig, 'upgradeNeeded'> & {
			featureFlags: Array<
				{ __typename?: 'FeatureFlag' } & Pick<Types.FeatureFlag, 'id' | 'isOn'>
			>
		}
	me?: Types.Maybe<{ __typename?: 'User' } & LoggedInUserFragment>
}

export type StorePushTokenMutationVariables = Types.Exact<{
	pushToken: Types.Scalars['String']
	timezoneOffset: Types.Scalars['Float']
}>

export type StorePushTokenMutation = { __typename?: 'Mutation' } & Pick<
	Types.Mutation,
	'storePushToken'
>
