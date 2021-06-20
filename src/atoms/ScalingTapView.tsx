import React from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { haptic } from '../utils/haptic'

export interface Props {
	onPress?: () => void
	hasHaptic?: boolean
	style?: ViewStyle
	hitSlop?: keyof typeof HitSlop
	testID?: string
}

export const HitSlop = {
	large: { top: 32, bottom: 32, left: 32, right: 32 },
	medium: { top: 16, bottom: 16, left: 16, right: 16 },
	small: { top: 4, bottom: 4, left: 4, right: 4 },
}

const ScalingTapView: React.FC<Props> = ({
	children,
	style,
	onPress,
	hasHaptic,
	hitSlop,
	testID,
}) => {
	const offset = useSharedValue(1)
	const _hitSlop = hitSlop ? HitSlop[hitSlop] : undefined

	const defaultSpringStyles = useAnimatedStyle(() => {
		return {
			transform: [{ scale: withSpring(offset.value) }],
		}
	})

	const onPressIn = () => {
		if (!onPress) {
			return
		}
		offset.value = 0.9
	}

	const onPressOut = () => {
		if (!onPress) {
			return
		}
		offset.value = 1
	}

	const _onPress = () => {
		if (!onPress) {
			return
		}
		if (hasHaptic) {
			haptic('selection')
		}

		onPress()
	}
	// TODO
	return (
		<Animated.View style={[style, defaultSpringStyles]}>
			<TouchableOpacity
				accessibilityRole="button"
				activeOpacity={1}
				onPress={_onPress}
				onPressIn={onPressIn}
				onPressOut={onPressOut}
				hitSlop={_hitSlop}
				testID={testID}
			>
				{children}
			</TouchableOpacity>
		</Animated.View>
	)
}

export default ScalingTapView
