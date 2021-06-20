import React from 'react'
import { View, ViewStyle } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { SvgPropsWithScale } from '../../icons/types'
import { useTheme } from '../../theme/themeContext'
import { ColorTypes } from '../../theme/types'

interface Props extends SvgPropsWithScale {
	arrowXPosition: 'left' | 'center' | 'right'
	fill?: ColorTypes
	isTop?: boolean
}

const Arrow = ({
	isTop,
	fill = 'primaryText',
	arrowXPosition,
	scale = 1,
	...rest
}: Props): JSX.Element => {
	const style = {
		flexDirection: 'row',
		justifyContent: jc[arrowXPosition],
		top: 4,
	} as ViewStyle

	const arrowStyle = { transform: [{ rotate: isTop ? '0deg' : '180deg' }] }

	return (
		<View style={style}>
			<Svg
				width={25 * scale}
				height={22 * scale}
				viewBox="0 0 25 22"
				fill="none"
				{...rest}
				style={arrowStyle}
			>
				<Path
					d="M10.768 1c.77-1.333 2.694-1.333 3.464 0l9.96 17.25c.77 1.333-.193 3-1.733 3H2.541c-1.54 0-2.502-1.667-1.732-3L10.768 1z"
					fill={useTheme().colors[fill]}
				/>
			</Svg>
		</View>
	)
}

const jc = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
}

export default Arrow
