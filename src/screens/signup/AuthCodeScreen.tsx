import { RouteProp } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button, { ButtonVariant } from '../../atoms/Button'
import DigitInput from '../../atoms/input/DigitInput'
import ScalingTapView from '../../atoms/ScalingTapView'
import Body from '../../atoms/texts/Body'
import Secundary from '../../atoms/texts/Secundary'
import { usePrevious } from '../../hooks/usePrevious'
import { useTimeout } from '../../hooks/useTimeout'
import { useStrings } from '../../localization/localizedStrings'
import { RootStackParamList } from '../../navigation/types'
import { useApplyAuthCodeMutation } from '../../queries/autogenerate/hooks'
import { updateOnAuthSuccess } from '../../utils/authentication/onAuthSuccess'
import errorHandler from '../../utils/errors'
import { createLogger } from '../../utils/logger'
import AuthScreenWrapper from './AuthScreenWrapper'
import { useCreateSignupOrLoginCodeMutation } from './useCreateSignupOrLoginCodeMutation'

const logger = createLogger('🔑', 'auth-code')
interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'AuthCode'>
	route: RouteProp<RootStackParamList, 'AuthCode'>
}

const AuthCodeScreen = ({ navigation, route }: Props): JSX.Element => {
	const { isSignup, email, redirectScreen } = route.params
	const [code, setCode] = useState('')
	const prevCode = usePrevious<string>(code)
	const [showDidResend, setShowDidResend] = useState(false)
	const timeout = useTimeout()

	const authStrings = useStrings().strings.auth
	const strings = isSignup ? authStrings.signup : authStrings.login
	const isCodeValid = code.length === 4

	const [resendMutation, resendState] = useCreateSignupOrLoginCodeMutation(isSignup, email)
	const [mutation, { loading, error }] = useApplyAuthCodeMutation()
	const errorString = error?.message || resendState.errorString
	const isLoading = loading || resendState.isLoading

	useEffect(() => {
		if (code.length === 4 && prevCode.length === 3) {
			void onContinue()
		}
	}, [code])

	const onContinue = async () => {
		try {
			const { errors } = await mutation({
				variables: { email, code },
				update: updateOnAuthSuccess('data.applyAuthCode'),
			})

			if (!errors) {
				const toScreen = redirectScreen || 'Home'
				// @ts-ignore
				navigation.navigate(toScreen)
			}
		} catch (err) {
			errorHandler.reportError(err)
		}
	}

	const resendCode = async () => {
		logger.log('Resending code', undefined, true)
		const didFail = await resendMutation()
		if (!didFail) {
			renderDidResendMessage()
		}
	}

	const renderDidResendMessage = () => {
		setShowDidResend(true)

		timeout.current = setTimeout(() => setShowDidResend(false), 5000)
	}

	return (
		<AuthScreenWrapper
			isLoading={isLoading}
			navigation={navigation}
			headerTitle={strings.title}
			headerSubTitle={strings.subTitle}
			MainComponent={
				<>
					<Body mb={4} color="grey600">
						{authStrings.enterCode}
					</Body>
					<DigitInput placeholder="1234" onChangeText={setCode} autoFocus />
					{!!errorString && (
						<Body mt={3} color="error" fw="DemiBold">
							{errorString}
						</Body>
					)}

					<ScalingTapView onPress={resendCode}>
						<Secundary mt={6}>
							{showDidResend ? authStrings.didResend : authStrings.resendCode()}
						</Secundary>
					</ScalingTapView>
				</>
			}
			FooterComponent={
				<Button
					variant={ButtonVariant.Primary}
					onPress={onContinue}
					mb={5}
					disabled={!isCodeValid}
				>
					{authStrings.continue}
				</Button>
			}
		/>
	)
}

export default AuthCodeScreen
