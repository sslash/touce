import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useTheme } from '../../theme/themeContext'
import { Colors } from '../../theme/types'

export interface Props {
	numberOfDots: number
	x: Animated.SharedValue<number>
	width: number
}

const size = 6
const fancySize = size * 4

const FancyProgressDots = (props: Props): JSX.Element => {
	const { colors } = useTheme()
	const items = [...new Array(props.numberOfDots)]
	return (
		<View style={styles.dots}>
			{items.map((_, i) => {
				return <ProgressDot key={i} {...props} {...{ i, colors }} />
			})}
		</View>
	)
}

const ProgressDot = ({ x, width, i, colors }: Props & { colors: Colors; i: number }) => {
	const animStyle = useAnimatedStyle(() => {
		const inputRange = [(i - 0.5) * width, i * width, (i + 0.5) * width]
		return {
			opacity: interpolate(x.value, inputRange, [0.2, 1, 0.2], Extrapolate.CLAMP),
			width: interpolate(x.value, inputRange, [size, fancySize, size], Extrapolate.CLAMP),
		}
	})

	return (
		<Animated.View
			key={i}
			style={[
				{
					marginHorizontal: size / 1.5,
					height: size,
					borderRadius: 5,
					backgroundColor: colors.primary600,
				},
				animStyle,
			]}
		></Animated.View>
	)
}

const styles = StyleSheet.create({
	dots: {
		flexDirection: 'row',
	},
})
export default FancyProgressDots
