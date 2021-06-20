import React from 'react'
import { Image, StyleSheet, ViewStyle } from 'react-native'
import { spotifyLogo } from '../images'
import { FontSize, FontWeight } from '../theme/fonts'
import { borderRadiusScale } from '../theme/metrics'
import applySpace, { SpaceProps } from '../theme/spacing'
import { ColorTypes } from '../theme/types'
import Bg, { BgProps } from './Bg'
import LoadingOverlay from './LoadingOverlay'
import Row from './Row'
import ScalingTapView from './ScalingTapView'
import T, { TProps } from './texts/T'
import V from './V'

export enum ButtonVariant {
	Primary = 'primary',
	Secundary = 'secundary',
	Sludge = 'sludge',
	Outline = 'outline',
	Spotify = 'spotify',
	DarkSludge = 'darkSludge',
}

interface Props extends SpaceProps {
	variant?: ButtonVariant
	size?: 'small' | 'default'
	onPress: () => void
	logo?: SupportedLogos
	hasHaptic?: boolean
	width?: ViewStyle['width']
	disabled?: boolean
	isLoading?: boolean
	testID?: string
}

type SupportedLogos = 'spotify' | 'google'

const Button: React.FC<Props> = ({
	children,
	variant = ButtonVariant.Primary,
	size = 'default',
	onPress,
	width,
	logo,
	disabled,
	isLoading,
	testID,
	...rest
}) => {
	const isText = typeof children === 'string'
	const { color, darkColor, ...variantStyle } = variantPresets[variant]
	const _disabled = disabled || isLoading

	const inner = (function () {
		if (isText) {
			const style = [styles.buttonText, size && styles[`${size}Text`]]

			return (
				<T style={style} {...{ color, darkColor }}>
					{children}
				</T>
			)
		} else {
			return children
		}
	})()

	const logoSource = logo ? logos[logo] : null

	const style = [
		styles.button,
		{
			borderWidth: variantStyle.borderWidth,
			opacity: _disabled ? 0.2 : 1,
		},
		size && styles[size],
		width && { width },
		applySpace(rest),
	]

	return (
		<ScalingTapView onPress={_disabled ? undefined : onPress} {...rest} testID={testID}>
			<Bg style={style} {...variantStyle}>
				<Row ai="center">
					{!!logoSource && <V mr={2}>{<Image source={logoSource} />}</V>}
					{inner}
				</Row>
			</Bg>
			{isLoading && <LoadingOverlay />}
		</ScalingTapView>
	)
}

const logos = {
	spotify: spotifyLogo,
	google: spotifyLogo,
}

type Preset = Record<string, BgProps & TProps & { borderWidth?: number }>

const variantPresets: Preset = {
	primary: {
		bg: 'primaryAction',
		color: 'primaryActionText',
		borderWidth: 0,
	},
	spotify: {
		bg: 'spotify',
		color: 'primaryActionText',
		borderWidth: 0,
	},
	secundary: {
		bg: 'primary600',
		color: 'primary50',
		borderColor: 'primary700',
		borderWidth: 1,
	},
	sludge: {
		bg: 'primaryTransparent100',
		borderWidth: 1,
		borderColor: 'lightTransparent800',
		bgDark: 'primary400',
		borderColorDark: 'primary20',
		color: 'primary900',
	},
	darkSludge: {
		bg: 'primaryTransparent600',
		borderWidth: 1,
		borderColor: 'primaryDeath',
		bgDark: 'secundary400',
		borderColorDark: 'secundary20' as ColorTypes,
		color: 'primary50',
		darkColor: 'secundary900',
	},
	outline: {
		bg: 'transparent',
		borderWidth: 1,
		borderColor: 'primaryTransparent300',
		color: 'primary900',
	},
}

const styles = StyleSheet.create({
	button: {
		borderRadius: borderRadiusScale[3],
		paddingVertical: 16,
		paddingHorizontal: 22,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: FontSize.Title,
		fontWeight: FontWeight.Bold,
	},

	// eslint-disable-next-line react-native/no-unused-styles
	small: {
		paddingVertical: 12,
		paddingHorizontal: 18,
	},
	// eslint-disable-next-line react-native/no-unused-styles
	smallText: {
		fontSize: FontSize.FormControls,
		fontWeight: FontWeight.Bold,
	},
})

export default Button
