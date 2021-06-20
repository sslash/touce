import React from 'react'
import { View } from 'react-native'
import applySpace, { SpaceProps } from '../theme/spacing'
import { useTheme } from '../theme/themeContext'
import { ColorTypes } from '../theme/types'

interface Props extends SpaceProps {
	isHorizontal?: boolean
	color?: ColorTypes
	darkColor?: ColorTypes
	length?: string | number
}

const Separator = ({
	isHorizontal = true,
	color = 'primaryTransparent100',
	darkColor = 'primaryTransparent300',
	length = '100%',
	...rest
}: Props): JSX.Element => {
	const { colors, isDark } = useTheme()
	const _color = (isDark ? darkColor : color) || color
	const style = [
		{ height: isHorizontal ? 1 : length, width: isHorizontal ? length : 1 },
		{ backgroundColor: colors[_color] },
		applySpace(rest),
	]

	return <View style={style}></View>
}
export default Separator
