import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import RadioInput, { RadioItem } from './RadioInput'

interface Props {
	items: RadioItem[]
	selectedIndex: number
	onSelectItem: (idx: number) => void
	isVertical?: boolean
	style?: ViewStyle
	spacing?: number
}

const RadioGroup = ({
	items,
	selectedIndex,
	isVertical,
	onSelectItem,
	style,
	spacing,
}: Props): React.ReactElement => {
	const styles = [isVertical ? presets.vertical : presets.horizontal, style]
	return (
		<View style={styles}>
			{items.map((label, index) => (
				<RadioInput
					{...{ index, label, isVertical, spacing }}
					onPress={onSelectItem}
					key={index}
					isSelected={selectedIndex === index}
				/>
			))}
		</View>
	)
}

const presets = StyleSheet.create({
	vertical: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	horizontal: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})

export default RadioGroup
