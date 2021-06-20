import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FontSize, FontWeight } from '../theme/fonts'
import lightColors from '../theme/lightColors'
import applySpace, { SpaceProps } from '../theme/spacing'
import { useTheme } from '../theme/themeContext'
import { ColorTypes } from '../theme/types'
import ScalingTapView from './ScalingTapView'
import T from './texts/T'

export enum ButtonVariant {
	Primary = 'primary',
}

interface Props extends SpaceProps {
	variant?: ButtonVariant
	onPress: () => void
	hasHaptic?: boolean
}

const RoundButton: React.FC<Props> = ({
	children,
	variant = ButtonVariant.Primary,
	onPress,
	...rest
}) => {
	const { colors, isDark } = useTheme()

	const isText = typeof children === 'string'

	const inner = (function () {
		if (isText) {
			const color = variantStyles[variant].color as ColorTypes
			const style = [styles.buttonText]

			return (
				<T style={style} {...{ color }}>
					{children}
				</T>
			)
		} else {
			return children
		}
	})()

	const backgroundColor = colors[variantStyles[variant].bg as ColorTypes]

	const style = StyleSheet.flatten([
		styles.button,
		{
			backgroundColor,
			borderColor: isDark ? colors.lightTransparent80 : colors.lightTransparent900,
		},
		applySpace(rest),
	])

	return (
		<ScalingTapView {...{ onPress }} {...rest}>
			<View style={style}>{inner}</View>
		</ScalingTapView>
	)
}

const variantStyles = {
	primary: {
		bg: 'primaryAction',
		color: 'noModeLight',
	},
}

export const buttonSize = 82

const styles = StyleSheet.create({
	button: {
		borderRadius: buttonSize / 2,
		width: buttonSize,
		height: buttonSize,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,

		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.2,
		shadowRadius: 20,
		shadowColor: lightColors.darkBg,
		elevation: 4,
	},
	buttonText: {
		fontSize: FontSize.FormControls,
		fontWeight: FontWeight.Fat,
		fontStyle: 'italic',
	},
})

export default RoundButton
