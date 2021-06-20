import React, { PropsWithChildren } from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../theme/themeContext'
import { ColorTypes } from '../theme/types'

export const defaultDarkGradient = [
	'rgba(0, 0, 0, 0.02)',
	'rgba(23, 30, 39, 0.2)',
	'rgba(23, 30, 39, 0.4)',
	'rgba(23, 30, 39, 0.8)',
]

type Props = PropsWithChildren<{
	gradients?: ColorTypes[]
	style?: ViewStyle | ViewStyle[]
	direction?: 'horizontal' | 'vertical'
	renderToHardwareTextureAndroid?: boolean
}>

export const LinearGradientBackground = (props: Props): JSX.Element => {
	const direction = props.direction === 'horizontal' ? horizontal : vertical
	const colors = useTheme().colors
	const gradients = props.gradients ? props.gradients.map((g) => colors[g]) : defaultDarkGradient

	return (
		<LinearGradient
			renderToHardwareTextureAndroid={props.renderToHardwareTextureAndroid}
			colors={gradients}
			style={[styles.gradient, props.style]}
			{...direction}
		>
			{props.children}
		</LinearGradient>
	)
}

const horizontal = {
	start: { x: 0, y: 1 },
	end: { x: 1, y: 1 },
}

const vertical = {
	start: { x: 0, y: 0 },
	end: { x: 0, y: 1 },
}

const styles = StyleSheet.create({
	gradient: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center',
		alignSelf: 'stretch',
	},
})

export default LinearGradientBackground
