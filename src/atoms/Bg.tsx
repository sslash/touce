import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { useTheme } from '../theme/themeContext'
import { ColorTypes } from '../theme/types'
import V, { VProps } from './V'

export interface BgProps extends VProps {
	bg?: ColorTypes
	bgDark?: ColorTypes
	borderColor?: ColorTypes
	borderColorDark?: ColorTypes
	style?: ViewStyle | ViewStyle[]
}

// use this component every time you want a view with a background color
// will listen to dark mode updates
export const Bg: React.FC<BgProps> = ({
	bg = 'white',
	bgDark,
	borderColor: borderColorLight,
	borderColorDark,
	style,
	...rest
}): JSX.Element => {
	const { colors, isDark: dark } = useTheme()
	const evaluatedColor = ((dark ? bgDark : bg) || bg) as ColorTypes
	const backgroundColor = colors[evaluatedColor]
	const evaluatedBorderColor = ((dark ? borderColorDark : borderColorLight) ||
		borderColorLight) as ColorTypes
	const borderColor = colors[evaluatedBorderColor]

	return <V {...rest} style={StyleSheet.flatten([style, { backgroundColor, borderColor }])} />
}

export default Bg
