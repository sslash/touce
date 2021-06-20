import React from 'react'
import { StyleSheet } from 'react-native'
import SmoothCornerView from '../nativeModules/SmoothCornerView'
import { borderRadiusScale } from '../theme/metrics'
import applySpace from '../theme/spacing'
import { useTheme } from '../theme/themeContext'
import { ColorTypes } from '../theme/types'
import { VProps } from './V'

interface Props extends VProps {
	variant?: CardVariant
	size?: 'default' | 'small'
	needsViewWrapping?: boolean
}

export enum CardVariant {
	Filled = 'filled',
	Outline = 'outline',
}

const backgrounds: Record<string, ColorTypes> = {
	[CardVariant.Filled]: 'primary20',
	[CardVariant.Outline]: 'transparent',
}

const Card: React.FC<Props> = ({
	variant = CardVariant.Filled,
	size = 'default',
	needsViewWrapping,
	children,
	...rest
}) => {
	const { colors } = useTheme()
	const bg = backgrounds[variant]
	const preset = presets[variant]
	const borderColor = preset?.borderColor as ColorTypes

	const style = StyleSheet.flatten([
		{ backgroundColor: colors[bg], borderColor: colors[borderColor], width: '100%' },
		sizeStyles[size],
		variantStyles[variant],
		applySpace(rest),
	])

	return <SmoothCornerView {...{ style, needsViewWrapping }}>{children}</SmoothCornerView>
}

const presets = {
	[CardVariant.Outline]: {
		borderColor: 'primary75',
	},
	[CardVariant.Filled]: {
		borderColor: undefined,
	},
}

const variantStyles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles
	[CardVariant.Outline]: {
		borderWidth: 1,
	},
	// eslint-disable-next-line react-native/no-unused-styles
	[CardVariant.Filled]: {},
})

const sizeStyles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles
	default: {
		borderRadius: borderRadiusScale[5],
		paddingHorizontal: 20,
		paddingVertical: 35,
	},
	// eslint-disable-next-line react-native/no-unused-styles
	small: {
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderRadius: borderRadiusScale[3],
	},
})

export default Card
