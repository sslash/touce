import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useTheme } from '../../theme/themeContext'
import { animationDuration } from './constants'

interface Props {
	width: Animated.SharedValue<number>
	x: Animated.SharedValue<number>
}

const Indicator = ({ width, x }: Props): JSX.Element => {
	const { colors } = useTheme()

	const widthStyle = useAnimatedStyle(() => {
		return {
			width: withTiming(width.value),
			transform: [
				{
					translateX: withTiming(x.value, { duration: animationDuration }),
				},
			],
		}
	})

	return (
		<Animated.View
			style={[
				styles.indicator,
				{
					backgroundColor: colors.primaryText,
				},
				widthStyle,
			]}
		/>
	)
}

const styles = StyleSheet.create({
	indicator: {
		position: 'absolute',
		left: 0,
		height: 3,
		borderRadius: 1,
		bottom: -4,
	},
})

export default Indicator
