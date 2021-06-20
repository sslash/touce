import React from 'react'
import { StyleSheet, View } from 'react-native'
import { spaceScale } from '../../theme/spacing'
import Checkbox, { size } from '../Checkbox'
import ScalingTapView from '../ScalingTapView'
import Body from '../texts/Body'

export type RadioItem = string | JSX.Element

interface Props {
	onPress: (idx: number) => void
	index: number
	isSelected: boolean
	label: RadioItem
	isVertical?: boolean
	spacing?: number
}

const RadioInput = ({
	label,
	isSelected,
	onPress,
	index,
	isVertical,
	spacing = spaceScale[4],
}: Props): React.ReactElement => {
	const isString = typeof label === 'string'
	const _onPress = () => onPress(index)
	const spaceStyle = isVertical ? styles.verticalMargin : styles.horizontalMargin
	const checkStyle = StyleSheet.flatten([styles.radio, { marginLeft: spacing }])

	return (
		<ScalingTapView onPress={_onPress}>
			<View style={[styles.wrapper, spaceStyle]}>
				{isString ? <Body>{label}</Body> : label}
				<Checkbox style={checkStyle} isChecked={isSelected} onPress={_onPress} />
			</View>
		</ScalingTapView>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	radio: {
		borderRadius: size / 2,
	},
	verticalMargin: {
		marginBottom: 24,
	},
	horizontalMargin: {
		marginRight: 24,
	},
})

export default RadioInput
