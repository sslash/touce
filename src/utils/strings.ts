import { AppleRequestResponse } from '@invertase/react-native-apple-authentication'
import uuid from 'react-native-uuid'

export const appleFullnameToUsername = (fullName: AppleRequestResponse['fullName']): string =>
	fullName?.givenName && fullName.familyName
		? `${fullName.givenName} ${fullName.familyName}`
		: fullName?.givenName
		? fullName?.givenName
		: fullName?.familyName || ''

export const createAnonomousAppleEmail = (): string =>
	`${uuid.v4() as string}-privateuser@shiftfm.app`
