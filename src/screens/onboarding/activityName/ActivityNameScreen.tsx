import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../../atoms/Button'
import Input from '../../../atoms/input/Input'
import { SludgeVariant } from '../../../atoms/sludges'
import { useStrings } from '../../../localization/localizedStrings'
import Screen from '../../../molecules/screen/Screen'
import { spaceScale } from '../../../theme/spacing'

const ActivityNameScreen = (): JSX.Element => {
	const {
		strings: { onboarding: strings },
	} = useStrings()

	const onContinue = () => null

	return (
		<Screen
			testID="ActivityName"
			sludge={SludgeVariant.Ditto}
			preset={'fixed'}
			stdMargin
			headerTitle={strings.activityName.title}
			sludgeStyle={{ top: -20 }}
		>
			<View style={styles.container}>
				<Input placeholder="Pilates, boxing, etc ..." autoFocus />
			</View>
			<SafeAreaView>
				<Button onPress={onContinue} hasHaptic>
					{strings.continue}
				</Button>
			</SafeAreaView>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: spaceScale[4],
	},
})

export default ActivityNameScreen
