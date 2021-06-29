import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bg from '../../../../atoms/Bg'
import Button from '../../../../atoms/Button'
import Title from '../../../../atoms/texts/Title'
import V from '../../../../atoms/V'
import { MinsAndSecsTimerData } from '../../../../hooks/useMinsAndSecsTimerData'
import { useStrings } from '../../../../localization/localizedStrings'
import SecsAndMinsTimerPicker from '../../../../molecules/SecsAndMinsTimerPicker'
import SwitchSettingRow from '../../../../molecules/settings/SwitchSettingRow'
import { secsToColonParts } from '../../../../utils/time'

type Props = {
	bodyText: string
	onSave: () => void
} & MinsAndSecsTimerData

const TimerViewTemplate = ({
	totalSeconds,
	bodyText,
	onSave,
	...props
}: Props): React.ReactElement => {
	const s = useStrings().strings

	const buttonText = totalSeconds
		? `${s.general.save} ${secsToColonParts(totalSeconds)}`
		: s.timer.turnOffTimer

	const onSavePress = () => {
		props.persistToWorkoutTimer()
		onSave()
	}

	return (
		<V mhm flex={1}>
			<SwitchSettingRow body={bodyText} isOn={props.isOn} onToggle={props.toggle} />

			<V my={6}>
				<SecsAndMinsTimerPicker {...props} enabled={props.isOn} />
				{!props.isOn && (
					<Bg style={styles.overlay} bg="noModeLight">
						<Title>{s.timer.disasbled}</Title>
					</Bg>
				)}
			</V>
			<SafeAreaView>
				<Button onPress={onSavePress}>{buttonText}</Button>
			</SafeAreaView>
		</V>
	)
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		position: 'absolute',
		opacity: 0.9,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
})

export default TimerViewTemplate
