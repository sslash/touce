import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { Sludge, SludgeVariant } from '../../../atoms/sludges'

interface Props {
	position: Animated.SharedValue<number>
	itemWidth: number
}

const SludgeHeader = ({ position, itemWidth }: Props): React.ReactElement => {
	const animatedStyle = useAnimatedStyle(() => {
		const translateY = interpolate(
			position.value,
			[0, itemWidth, 2 * itemWidth],
			[-65, -52, -65],
			Extrapolate.CLAMP
		)
		return {
			transform: [
				{
					translateY,
				},
			],
		}
	})

	return (
		<Animated.View style={animatedStyle}>
			<Sludge variant={SludgeVariant.Wailmer} style={{top: -115 }} />
		</Animated.View>
	)
}

export default SludgeHeader
