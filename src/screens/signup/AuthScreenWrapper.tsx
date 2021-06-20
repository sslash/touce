import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import LoadingOverlay from '../../atoms/LoadingOverlay'
import { Sludge, SludgeVariant } from '../../atoms/sludges'
import Caption2 from '../../atoms/texts/Caption2'
import V from '../../atoms/V'
import { useStrings } from '../../localization/localizedStrings'
import Screen from '../../molecules/screen/Screen'
import { RootStackParamList } from '../../navigation/types'
import { mainHorizontalMargin, screenHeight } from '../../theme/metrics'
import config from '../../utils/config/config'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList>
	headerTitle: string
	headerSubTitle: string
	MainComponent: JSX.Element
	FooterComponent: JSX.Element
	isLoading?: boolean
}

const AuthScreenWrapper = ({
	navigation,
	headerTitle,
	headerSubTitle,
	MainComponent,
	FooterComponent,
	isLoading,
}: Props): JSX.Element => {
	const authStrings = useStrings().strings.auth
	const onTermsPress = () => {
		navigation.navigate('WebView', { uri: config.termsUrl })
	}
	const onPrivacyPress = () => {
		navigation.navigate('WebView', { uri: config.privacyUrl })
	}

	return (
		<Screen
			stdMargin
			backButtonStyle="push"
			testID="SignupScreen"
			sludge={SludgeVariant.Lapras}
			navigation={navigation}
			headerTitle={headerTitle}
			headerSubTitle={headerSubTitle}
		>
			<V flex={1} style={styles.inner} jc="space-between">
				<View>{MainComponent}</View>
				{isLoading && <LoadingOverlay isModal />}
				<SafeAreaView>
					<Sludge variant={SludgeVariant.Aipom} isFaded style={styles.sludge} />
					{FooterComponent}

					<Caption2 ta="center" lh={20} color="primaryDeath">
						{authStrings.tAndC({
							fw: 'Bold',
							color: 'primaryDeath',
							onTermsPress,
							onPrivacyPress,
						})}
					</Caption2>
				</SafeAreaView>
			</V>
		</Screen>
	)
}

const styles = StyleSheet.create({
	sludge: {
		marginHorizontal: -mainHorizontalMargin,
	},
	inner: { marginTop: screenHeight * 0.15 },
})

export default AuthScreenWrapper
