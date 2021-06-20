import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Button from '../../atoms/Button'
import Input from '../../atoms/input/Input'
import { SludgeVariant } from '../../atoms/sludges'
import Lead from '../../atoms/texts/Lead'
import { useStrings } from '../../localization/localizedStrings'
import Screen from '../../molecules/screen/Screen'
import { spaceScale } from '../../theme/spacing'
import AdvancedHiitBox from './AdvancedHiitBox'

interface Props {}

const ActivityTimerNameScreen = ({}: Props): JSX.Element => {
	const [title, setTitle] = useState('')
	const emoji = '🦍'
	const {
		strings: { newTimer: strings },
	} = useStrings()

	const onContinue = () => {}

	return (
		<Screen
			testID="ActivityTimerNameScreen"
			sludge={SludgeVariant.Ditto}
			preset={'fixed'}
			stdMargin
			keyboardAvoidingEnabled={false}
			headerTitle={
				<Lead fw="Bold">
					{strings.title}
					<Lead fw="Bold" color="primary600">
						{strings.title2}
					</Lead>
				</Lead>
			}
			sludgeStyle={{ top: -30 }}
		>
			<View style={styles.container}>
				<Lead fw="Fat" style={styles.title}>
					{emoji} {title}
				</Lead>
				<Input placeholder="Pilates, boxing, etc ..." onChangeText={setTitle} />
			</View>
			<AdvancedHiitBox />
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
	title: {
		position: 'absolute',
		top: 100,
		left: 0,
		right: 0,
		alignSelf: 'center',
		textAlign: 'center',
	},
})

export default ActivityTimerNameScreen
