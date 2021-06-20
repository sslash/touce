import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { Icon } from '../icons'
import { ColorTypes } from '../theme/types'
import { haptic } from '../utils/haptic'
import Bg from './Bg'

interface Props {
	isChecked: boolean
	onPress: () => void
	hasHaptic?: boolean
	variant?: Variant
	style?: ViewStyle
}

export enum Variant {
	Filled = 'Filled',
	Outline = 'Outline',
}

const Checkbox: React.FC<Props> = ({
	onPress,
	isChecked,
	hasHaptic,
	variant = Variant.Filled,
	style,
}) => {
	const _onPress = () => {
		if (hasHaptic) {
			haptic('selection')
		}

		onPress()
	}

	const children =
		variant === Variant.Outline && isChecked ? <Icon icon="checkmark-outline" /> : null
	const preset = presets[variant]

	const colors = {
		bg: (isChecked ? preset.checked.bg : preset.unChecked.bg) as ColorTypes,
		bgDark: (isChecked ? preset.checked.bgDark : preset.unChecked.bgDark) as ColorTypes,
		borderColor: (isChecked ? preset.checked.border : preset.unChecked.border) as ColorTypes,
	}

	return (
		<TouchableOpacity onPress={_onPress}>
			<Bg {...colors} style={[styles.border, style]}>
				{children}
			</Bg>
		</TouchableOpacity>
	)
}

const presets = {
	Filled: {
		checked: {
			bg: 'primary600',
			bgDark: 'primary600',
			border: 'background',
		},
		unChecked: {
			bg: 'primary20',
			bgDark: 'primary100',
			border: 'primaryTransparent400',
		},
	},
	Outline: {
		checked: {
			bg: 'primary20',
			bgDark: 'primary20',
			border: 'primary75',
		},
		unChecked: {
			bg: 'primaryTransparent0',
			bgDark: 'primaryTransparent0',
			border: 'primary50',
		},
	},
}

export const size = 22
const styles = StyleSheet.create({
	border: {
		width: size,
		height: size,
		borderWidth: 1,
		borderRadius: Math.floor(size / 3),
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default Checkbox
