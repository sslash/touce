import React from 'react'
import { StyleSheet } from 'react-native'
import FastImage, { FastImageProps } from 'react-native-fast-image'
import { SharedElement } from 'react-navigation-shared-element'
import { borderRadiusScale } from '../theme/metrics'
import { useTheme } from '../theme/themeContext'

interface Props extends Omit<FastImageProps, 'source'> {
	variant: MediaImageVariant
	uri: string
	sharedElementId?: string
}

export enum MediaImageVariant {
	Large = 'large',
	Medium = 'medium',
	Small = 'small',
	Tall = 'tall',
}

const MediaImage = ({ variant, uri, sharedElementId, style, ...rest }: Props): JSX.Element => {
	const backgroundColor = useTheme().colors.grey100
	const variantStyle = [styles[variant], style]

	const ImageComp = (
		<FastImage
			source={{ uri }}
			{...rest}
			style={[variantStyle, { backgroundColor }]}
			resizeMode="cover"
		/>
	)
	if (sharedElementId) {
		return <SharedElement id={sharedElementId}>{ImageComp}</SharedElement>
	} else {
		return ImageComp
	}
}

export const largeSize = 80
export const mediumSize = 52
export const smallSize = 32

const styles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles
	large: {
		width: largeSize,
		height: largeSize,
		borderRadius: borderRadiusScale[2],
	},

	// eslint-disable-next-line react-native/no-unused-styles
	medium: {
		width: mediumSize,
		height: mediumSize,
		borderRadius: borderRadiusScale[1],
	},

	// eslint-disable-next-line react-native/no-unused-styles
	small: {
		width: smallSize,
		height: smallSize,
		borderRadius: borderRadiusScale[1],
	},

	// eslint-disable-next-line react-native/no-unused-styles
	tall: {
		width: largeSize,
		height: largeSize * (3 / 2),
		borderRadius: borderRadiusScale[2],
	},
})

export default MediaImage
