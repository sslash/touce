import React from 'react'
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import { FontFamily, FontSize, FontWeight } from '../../theme/fonts'
import applySpace, { SpaceProps } from '../../theme/spacing'
import { useTheme } from '../../theme/themeContext'
import { ColorTypes } from '../../theme/types'

interface Props extends TextProps {
	color?: ColorTypes
	darkColor?: ColorTypes
	fw?: keyof typeof FontWeight
	ta?: TextStyle['textAlign']
	lh?: TextStyle['lineHeight']
	italic?: boolean
	op?: TextStyle['opacity']
}

export type TProps = Props & SpaceProps

const T: React.FC<TProps> = ({
	style,
	color = 'primaryText',
	darkColor,
	children,
	accessibilityRole = 'text',
	...rest
}) => {
	const { isDark, colors } = useTheme()
	const evaluatedColor = isDark && darkColor ? colors[darkColor] : colors[color]
	const allStyles = StyleSheet.flatten([
		styles.text,
		{ color: evaluatedColor },
		applySpace(rest),
		applyTProps(rest),
		style,
	])

	return (
		<Text style={allStyles} {...{ accessibilityRole }} {...rest}>
			{children}
		</Text>
	)
}

export const applyTProps = (args: Props): Partial<TextStyle> => {
	return {
		fontWeight: FontWeight[args.fw],
		textAlign: args.ta,
		lineHeight: args.lh,
		fontStyle: args.italic ? 'italic' : 'normal',
		opacity: args.op,
	}
}

const styles = StyleSheet.create({
	text: {
		fontFamily: FontFamily.Default,
		fontSize: FontSize.Body,
	},
})

export default T
