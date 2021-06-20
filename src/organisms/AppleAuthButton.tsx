import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import LoadingOverlay from '../atoms/LoadingOverlay'
import Body from '../atoms/texts/Body'
import V, { VProps } from '../atoms/V'
import withIfPlatform from '../hocs/withIfPlatform'
import { useStrings } from '../localization/localizedStrings'
import {
	useCreateAppleUserMutation,
	useLoginAppleUserMutation,
} from '../queries/autogenerate/hooks'
import { borderRadiusScale } from '../theme/metrics'
import { useTheme } from '../theme/themeContext'
import authToken from '../utils/authentication/authToken'
import { updateOnAuthSuccess } from '../utils/authentication/onAuthSuccess'
import errorHandler from '../utils/errors'
import { createLogger } from '../utils/logger'
import { appleFullnameToUsername, createAnonomousAppleEmail } from '../utils/strings'

const logger = createLogger('🍎', 'apple auth')

interface Props {
	isSignup: boolean
	containerProps?: VProps
	onFinish: () => void
}

const AppleAuthButton = ({ isSignup, containerProps, onFinish }: Props): React.ReactElement => {
	const [isAuthenticating, setIsAuthenticating] = useState(false)
	const [customError, setCustomError] = useState(null)
	const { isDark } = useTheme()
	const strings = useStrings().strings.auth
	const [signupMutation, signupState] = useCreateAppleUserMutation()
	const [loginMutation, loginState] = useLoginAppleUserMutation()
	const apolloError = signupState?.error?.message || loginState?.error?.message
	const errorMessage = customError || apolloError
	const isLoading = signupState.loading || loginState.loading || isAuthenticating

	const onPress = async () => {
		setIsAuthenticating(true)
		setCustomError(null)

		logger.log('Beginning Apple Authentication', undefined, true)

		try {
			const appleAuthRequestResponse = await appleAuth.performRequest({
				requestedOperation: appleAuth.Operation.LOGIN,
				requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
			})

			logger.log('Apple login result', appleAuthRequestResponse.state, true)

			const {
				user,
				fullName,
				email,
				nonce,
				identityToken,
				realUserStatus,
			} = appleAuthRequestResponse

			const name = fullName ? appleFullnameToUsername(fullName) : ''

			if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
				logger.log('Likely a real person', undefined, true)
			}

			if (!identityToken) {
				logger.log('No identity token', undefined, true)
				return setCustomError('Something went wrong 😫 Maybe try again?')
			}

			// users can decide to hide their emails completely
			const _email = email || createAnonomousAppleEmail()

			if (isSignup) {
				await signupMutation({
					variables: {
						name,
						nonce,
						identityToken,
						email: _email,
						userId: user,
					},
					update: updateOnAuthSuccess('data.createAppleUser.user'),
				})
			} else {
				await loginMutation({
					variables: {
						nonce,
						identityToken,
						userId: user,
					},
					update: updateOnAuthSuccess('data.loginAppleUser.user'),
				})
			}

			logger.log('Apple auth success', undefined, true)
			onFinish()
		} catch (err) {
			errorHandler.reportError(err)
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			if (err.code === appleAuth.Error.CANCELED) {
				setCustomError(strings.appleCancelError)
			} else {
				setCustomError(strings.appleGeneralError)
			}
		} finally {
			setIsAuthenticating(false)
		}
	}

	return (
		<V {...containerProps}>
			<View>
				<AppleButton
					style={styles.appleButton}
					cornerRadius={borderRadiusScale[3]}
					buttonStyle={isDark ? AppleButton.Style.WHITE : AppleButton.Style.BLACK}
					buttonType={isSignup ? AppleButton.Type.SIGN_IN : AppleButton.Type.CONTINUE}
					onPress={onPress}
				/>
				{isLoading && <LoadingOverlay />}
			</View>
			{!!errorMessage && (
				<Body mt={3} color="error" fw="DemiBold">
					{errorMessage}
				</Body>
			)}
		</V>
	)
}

const styles = StyleSheet.create({
	appleButton: {
		width: '100%',
		height: 62,
	},
})

export default withIfPlatform(AppleAuthButton, 'ios')
