import { RouteProp } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button, { ButtonVariant } from '../../atoms/Button'
import Row from '../../atoms/Row'
import ScalingTapView from '../../atoms/ScalingTapView'
import Separator from '../../atoms/Separator'
import Caption from '../../atoms/texts/Caption'
import Secundary from '../../atoms/texts/Secundary'
import { useStrings } from '../../localization/localizedStrings'
import { RootStackParamList } from '../../navigation/types'
import AppleAuthButton from '../../organisms/AppleAuthButton'
import SpotifyAuthButton from '../../organisms/SpotifyAuthButton'
import { mainHorizontalMargin, screenWidth } from '../../theme/metrics'
import AuthScreenWrapper from './AuthScreenWrapper'
interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Auth'>
	route: RouteProp<RootStackParamList, 'Auth'>
}

const AuthScreen = ({ navigation, route }: Props): JSX.Element => {
	const [isSignup, setIsSignup] = useState(true)
	const authStrings = useStrings().strings.auth
	const strings = isSignup ? authStrings.signup : authStrings.login

	const toggleIsSignup = () => setIsSignup((val) => !val)

	const onChooseEmail = () =>
		navigation.navigate('AuthEmail', {
			isSignup,
		})

	const onOauthSuccess = () => {
		const toScreen = route.params?.redirectScreen || 'Home'
		// @ts-ignore
		navigation.navigate(toScreen)
	}

	const oathProps = {
		isSignup,
		containerProps: { mb: 4 },
		onFinish: onOauthSuccess,
	}

	return (
		<AuthScreenWrapper
			navigation={navigation}
			headerTitle={strings.title}
			headerSubTitle={strings.subTitle}
			MainComponent={
				<>
					<SpotifyAuthButton {...oathProps} />
					<AppleAuthButton {...oathProps} />

					<ScalingTapView onPress={toggleIsSignup}>
						<Secundary ta="center">{strings.changeToLogin()}</Secundary>
					</ScalingTapView>
				</>
			}
			FooterComponent={
				<>
					<Row ai="center" jc="space-between" mb={4}>
						<Separator length={separatorWidth} />
						<Caption style={styles.or} color="secundaryText">
							{authStrings.or}
						</Caption>
						<Separator length={separatorWidth} />
					</Row>
					<Button variant={ButtonVariant.Primary} onPress={onChooseEmail} mb={5}>
						{strings.withEmail}
					</Button>
				</>
			}
		/>
	)
}

const orWidth = 50
const separatorWidth = (screenWidth - mainHorizontalMargin * 2 - orWidth) / 2

const styles = StyleSheet.create({
	or: { width: orWidth, textAlign: 'center' },
})

export default AuthScreen
