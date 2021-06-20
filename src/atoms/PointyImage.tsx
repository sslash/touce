import React from 'react'
import { Image, ImageProps, StyleSheet, View } from 'react-native'
import lightColors from '../theme/lightColors'
import { shadows } from '../theme/shadows'
import { ColorTypes } from '../theme/types'
import LinearGradientBackground from './LinearGradientBg'

const size = 108
const borderRadius = 30

export enum Direction {
	TopLeft = 'TopLeft',
	TopRight = 'TopRight',
	BottomLeft = 'BottomLeft',
	BottomRight = 'BottomRight',
}

type Props = ImageProps & {
	direction: Direction
	isRestMode: boolean
}

const PointyImage: React.FC<Props> = ({ style, direction, isRestMode, ...props }) => {
	return (
		<View style={[styles.imageWrapper, presets[direction]]} {...props}>
			<Image style={[styles.image, presets[direction], style]} {...props} />

			<LinearGradientBackground
				gradients={isRestMode ? gradientPresets.rest : gradientPresets.lift}
				style={[styles.overlay, presets[direction]]}
				direction="vertical"
			/>
			<View style={[styles.border, presets[direction]]} />
		</View>
	)
}

const gradientPresets = {
	lift: ['secundaryTransparent600', 'secundaryTransparent100'] as ColorTypes[],
	rest: ['primaryTransparent600', 'primaryTransparent100'] as ColorTypes[],
}

const styles = StyleSheet.create({
	border: {
		borderWidth: 1,
		borderColor: lightColors.lightTransparent800,
		borderRadius,
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
	},
	overlay: {
		borderRadius,
		width: size,
		height: size,
	},
	imageWrapper: {
		width: size,
		height: size,
		...shadows.default,
		borderRadius,
	},
	image: {
		width: size,
		height: size,
		borderRadius,
	},
})

const presets = {
	[Direction.TopLeft]: {
		borderTopLeftRadius: 0,
	},
	[Direction.TopRight]: {
		borderTopRightRadius: 0,
	},
	[Direction.BottomLeft]: {
		borderBottomLeftRadius: 0,
	},
	[Direction.BottomRight]: {
		borderBottomRightRadius: 0,
	},
}
export default PointyImage
