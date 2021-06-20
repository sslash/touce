import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PickerProps, PickerVariant } from '../../atoms/Picker'
import Separator from '../../atoms/Separator'
import Switch from '../../atoms/Switch'
import Body from '../../atoms/texts/Body'
import V from '../../atoms/V'
import TimerPicker from '../../molecules/TimerPicker'
import { mainHorizontalMargin } from '../../theme/metrics'

interface Props {
	title: string
	selected: number
	setSelected: (v: number) => void
	items?: PickerProps['items']
}

const TimerTemplate = ({ title, selected, setSelected, items }: Props): JSX.Element => {
	const [isOn, setIsOn] = useState(true)
	return (
		<View style={styles.container}>
			<Body color="grey600" lh={25} ta="center" mb={4}>
				{title}
			</Body>
			<Separator />
			<View style={styles.timerWrapper}>
				<V ai="center" mb={3}>
					<Switch isOn={isOn} onValueChange={setIsOn} />
				</V>

				<TimerPicker
					variant={PickerVariant.Default}
					selected={selected}
					setSelected={setSelected}
					items={items}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: mainHorizontalMargin,
		flexGrow: 1,
	},
	timerWrapper: { flexGrow: 1, justifyContent: 'center' },
})
export default TimerTemplate
