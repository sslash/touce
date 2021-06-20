import { RouteProp } from '@react-navigation/core'
import React, { useState } from 'react'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button, { ButtonVariant } from '../../atoms/Button'
import Input from '../../atoms/input/Input'
import Body from '../../atoms/texts/Body'
import Caption from '../../atoms/texts/Caption'
import { useStrings } from '../../localization/localizedStrings'
import { RootStackParamList } from '../../navigation/types'
import errorHandler from '../../utils/errors'
import { isValidEmail } from '../../utils/validations'
import AuthScreenWrapper from './AuthScreenWrapper'
import { useCreateSignupOrLoginCodeMutation } from './useCreateSignupOrLoginCodeMutation'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'AuthEmail'>
	route: RouteProp<RootStackParamList, 'AuthEmail'>
}

const AuthEmailScreen = ({ navigation, route }: Props): JSX.Element => {
	const [email, setEmail] = useState('')
	const authStrings = useStrings().strings.auth
	const { isSignup } = route.params
	const [mutate, { isLoading, errorString }] = useCreateSignupOrLoginCodeMutation(isSignup, email)

	const strings = isSignup ? authStrings.signup : authStrings.login
	const isValid = isValidEmail(email)

	const onContinue = async () => {
		try {
			const didFail = await mutate()

			if (!didFail) {
				navigation.navigate('AuthCode', { ...route.params, email })
			}
		} catch (err) {
			errorHandler.reportError(err)
		}
	}

	const onSubmit = () => {
		if (isValid) {
			void onContinue()
		}
	}

	return (
		<AuthScreenWrapper
			{...{ isLoading, errorString }}
			navigation={navigation}
			headerTitle={strings.title}
			headerSubTitle={strings.subTitle}
			MainComponent={
				<>
					<Caption mb={3} color="primaryText">
						{authStrings.enterEmail}
					</Caption>
					<Input
						autoFocus
						placeholder={authStrings.emailPlaceholder}
						onChangeText={setEmail}
						keyboardType="email-address"
						onSubmitEditing={onSubmit}
						autoCapitalize="none"
						autoCorrect={false}
					/>
					{!!errorString && (
						<Body mt={3} color="error" fw="DemiBold">
							{errorString}
						</Body>
					)}
				</>
			}
			FooterComponent={
				<Button
					variant={ButtonVariant.Primary}
					onPress={onContinue}
					mb={5}
					disabled={!isValid}
				>
					{authStrings.continue}
				</Button>
			}
		/>
	)
}

export default AuthEmailScreen
