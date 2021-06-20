export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any
	/** The `Upload` scalar type represents a file upload. */
	Upload: any
}

export type AppConfig = {
	__typename?: 'AppConfig'
	upgradeNeeded: Scalars['Boolean']
	featureFlags: Array<FeatureFlag>
}

export enum CacheControlScope {
	Public = 'PUBLIC',
	Private = 'PRIVATE',
}

export type FeatureFlag = {
	__typename?: 'FeatureFlag'
	id: Scalars['String']
	isOn: Scalars['Boolean']
}

export type Mutation = {
	__typename?: 'Mutation'
	_?: Maybe<Scalars['Boolean']>
	userInputError?: Maybe<Scalars['String']>
	createLoginCode: Scalars['Boolean']
	createSignupCode: Scalars['Boolean']
	applyAuthCode: User
	createOauthUser: OauthUserResult
	createAppleUser: OauthUserResult
	loginAppleUser: OauthUserResult
	createGoogleUser: OauthUserResult
	loginGoogleUser: OauthUserResult
	storePushToken?: Maybe<Scalars['ID']>
}

export type MutationUserInputErrorArgs = {
	input?: Maybe<Scalars['String']>
}

export type MutationCreateLoginCodeArgs = {
	email: Scalars['String']
}

export type MutationCreateSignupCodeArgs = {
	email: Scalars['String']
}

export type MutationApplyAuthCodeArgs = {
	email: Scalars['String']
	code: Scalars['String']
	pushToken?: Maybe<Scalars['String']>
}

export type MutationCreateOauthUserArgs = {
	email: Scalars['String']
	spotifyId: Scalars['String']
	pushToken?: Maybe<Scalars['String']>
}

export type MutationCreateAppleUserArgs = {
	email: Scalars['String']
	name: Scalars['String']
	nonce: Scalars['String']
	identityToken: Scalars['String']
	userId: Scalars['String']
	pushToken?: Maybe<Scalars['String']>
}

export type MutationLoginAppleUserArgs = {
	userId: Scalars['String']
	nonce: Scalars['String']
	identityToken: Scalars['String']
}

export type MutationCreateGoogleUserArgs = {
	googleId: Scalars['String']
	idToken: Scalars['String']
	pushToken?: Maybe<Scalars['String']>
}

export type MutationLoginGoogleUserArgs = {
	googleId: Scalars['String']
	idToken: Scalars['String']
}

export type MutationStorePushTokenArgs = {
	pushToken: Scalars['String']
	timezoneOffset: Scalars['Float']
}

export type OauthUserResult = {
	__typename?: 'OauthUserResult'
	user: User
	userExisted?: Maybe<Scalars['Boolean']>
}

export type PushToken = {
	__typename?: 'PushToken'
	id: Scalars['ID']
	token: Scalars['String']
	timeZoneOffset: Scalars['Float']
	created: Scalars['DateTime']
	userId?: Maybe<Scalars['ID']>
}

export type Query = {
	__typename?: 'Query'
	_?: Maybe<Scalars['Boolean']>
	authenticationError?: Maybe<Scalars['String']>
	me?: Maybe<User>
	appConfig: AppConfig
}

export type Subscription = {
	__typename?: 'Subscription'
	_?: Maybe<Scalars['Boolean']>
}

export type User = {
	__typename?: 'User'
	id: Scalars['ID']
	email: Scalars['String']
	token?: Maybe<Scalars['String']>
	appleUserId?: Maybe<Scalars['String']>
	googleUserId?: Maybe<Scalars['String']>
	username?: Maybe<Scalars['String']>
}
