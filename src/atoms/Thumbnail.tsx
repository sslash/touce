import React from 'react'
import { StyleSheet } from 'react-native'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { borderRadiusScale } from '../theme/metrics'

interface Props extends FastImageProps {
	size?: 'small' | 'medium' | 'large'
	variant?: 'circular' | 'bordered'
}

const Thumbnail = ({
	source,
	size = 'medium',
	variant = 'circular',
	...rest
}: Props): JSX.Element => {
	const sizeStyle = sizeStyles[size]
	const sizeInPixels = size === 'medium' ? mediumSize : smallSize
	const variantStyle = variantStyles(sizeInPixels)[variant]

	return <FastImage {...{ source }} {...rest} style={[sizeStyle, variantStyle]} />
}

const largeSize = 48
const mediumSize = 32
const smallSize = 24

const sizeStyles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles
	medium: {
		width: mediumSize,
		height: mediumSize,
		borderRadius: mediumSize / 2,
	},

	// eslint-disable-next-line react-native/no-unused-styles
	large: {
		width: largeSize,
		height: largeSize,
		borderRadius: largeSize / 2,
	},

	// eslint-disable-next-line react-native/no-unused-styles
	small: {
		width: smallSize,
		height: smallSize,
		borderRadius: mediumSize / 2,
	},
})

const variantStyles = (size: number) => ({
	circular: {
		borderRadius: size / 2,
	},

	bordered: {
		borderRadius: size * 0.18,
	},
})

export default Thumbnail
