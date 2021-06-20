import React, { useLayoutEffect } from 'react'
import { ViewStyle } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface Props {
	style?: ViewStyle
	delay?: number
	from?: 'top' | 'bottom' | 'left' | 'right'
}

const SlideIn: React.FC<Props> = ({
	children,
	style,
	from = 'bottom',
	delay = 1000,
}): JSX.Element => {
	const isRendered = useSharedValue(false)
	const isHorizontal = ['left', 'right'].includes(from)

	useLayoutEffect(() => {
		setTimeout(renderIn, delay)
	}, [])

	const renderIn = () => {
		isRendered.value = !isRendered.value
	}

	const animStyle = useAnimatedStyle(() => {
		const transform = isHorizontal
			? { translateX: withTiming(isRendered.value ? 0 : from === 'left' ? -200 : 200) }
			: { translateY: withTiming(isRendered.value ? 0 : from === 'top' ? -200 : 200) }

		return {
			opacity: withTiming(isRendered.value ? 1 : 0),
			transform: [transform],
		}
	})

	return <Animated.View style={[style, animStyle]}>{children}</Animated.View>
}

export default SlideIn
