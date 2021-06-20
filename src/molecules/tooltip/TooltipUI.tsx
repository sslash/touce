import React from 'react'
import { StyleSheet, View } from 'react-native'
import Bg from '../../atoms/Bg'
import { shadows } from '../../theme/shadows'
import { ColorTypes } from '../../theme/types'
import Arrow from './Arrow'

export interface Props {
	tooltipContent: JSX.Element
	arrowXPosition?: 'left' | 'right' | 'center'
	arrowYPosition?: 'top' | 'bottom'
	theme?: 'normal' | 'colored'
	xPosition?: 'left' | 'right' | 'center'
	size?: 'small' | 'medium'
}

// TODO: support all positions
const TooltipUI = ({
	tooltipContent,
	xPosition = 'center',
	arrowYPosition = 'top',
	arrowXPosition = 'center',
	theme = 'normal',
	size = 'medium',
}: Props): JSX.Element => {
	const wrapperStyle = [styles.tooltip, xPositionPresets[xPosition]]
	const bg: ColorTypes = theme === 'normal' ? 'primaryText' : 'primary700'
	const bgStyle = sizeStyles[size]
	const bgProps = { bg, style: bgStyle }
	const isTop = arrowYPosition === 'top'
	const scale = size === 'medium' ? 1 : 0.7

	return (
		<View style={wrapperStyle}>
			{isTop ? (
				<>
					<Arrow isTop fill={bg} {...{ arrowXPosition, scale }} />
					<Bg {...bgProps}>{tooltipContent}</Bg>
				</>
			) : (
				<>
					<Arrow isTop fill={bg} {...{ arrowXPosition, scale }} />
					<Bg {...bgProps}>{tooltipContent}</Bg>
				</>
			)}
		</View>
	)
}

const xPositionPresets = {
	xLeft: {
		left: 0,
	},
	xRight: {
		right: 0,
	},
}

const styles = StyleSheet.create({
	tooltip: {
		position: 'absolute',
		...shadows.default,
	},
})

const sizeStyles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles
	medium: {
		paddingHorizontal: 26,
		paddingVertical: 22,
		borderRadius: 24,
	},

	// eslint-disable-next-line react-native/no-unused-styles
	small: {
		padding: 14,
		paddingVertical: 10,
		borderRadius: 10,
	},
})

export default TooltipUI
