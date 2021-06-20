import _ from 'lodash'
import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import Bg from '../atoms/Bg'
import Row from '../atoms/Row'

interface Props {
	count: number
	style?: ViewStyle
	position: Animated.SharedValue<number>
	itemWidth: number
}

const ProgressDots = ({ itemWidth, count, style, position }: Props): JSX.Element => {
	return (
		<Row {...{ style }}>
			{_.range(0, count).map((index) => (
				<Dot {...{ itemWidth, position, index }} key={index} />
			))}
		</Row>
	)
}

interface DotProps {
	index: number
	position: Animated.SharedValue<number>
	itemWidth: number
}

const Dot = ({ position, itemWidth, index }: DotProps) => {
	const opacityStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			position.value,
			[(index - 0.5) * itemWidth, index * itemWidth, (index + 0.5) * itemWidth],
			[0.2, 1, 0.2],
			Extrapolate.CLAMP
		),
	}))

	return (
		<Animated.View style={opacityStyle}>
			<Bg bg="primaryDeath" style={styles.dash} />
		</Animated.View>
	)
}

const size = 10
const styles = StyleSheet.create({
	dash: {
		width: size,
		height: size,
		borderRadius: size / 2,
		marginHorizontal: 4,
	},
})

export default ProgressDots
