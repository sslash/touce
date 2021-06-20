import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { ColorTypes } from '../theme/types'
import Bg from './Bg'

export interface Props {
	size?: number
	bg?: ColorTypes
	style?: ViewStyle
}

const Ellipse: React.FC<Props> = ({ size = 32, bg = 'primary500', children, style }) => {
	const wrapperStyle = {
		width: size,
		height: size,
		borderRadius: size / 2,
	}
	return (
		<Bg {...{ bg }} style={StyleSheet.flatten([styles.wrapper, wrapperStyle, style])}>
			{children}
		</Bg>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default Ellipse
