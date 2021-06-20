import React, { useEffect, useRef } from 'react'
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
	Easing,
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import { mainHorizontalMargin, screenWidth } from '../../theme/metrics'
import { shadows } from '../../theme/shadows'
import { useTheme } from '../../theme/themeContext'
import { HitSlop } from '../../atoms/ScalingTapView'
import _ from 'lodash'

interface Props {
	onSlideEnd: (position: number) => void
	dotSize: 'large' | 'small'
	position?: number // goes from 0 -> 1
	initialPosition?: number
	width?: ViewStyle['width']
	onDrag?: (position: number) => void
}

const dotSizeSmall = 12
const dotSizeLarge = 20
const defaultWidth = screenWidth - mainHorizontalMargin * 2

const SlidableProgress = ({
	position = 0,
	initialPosition = 0,
	onSlideEnd: onSlideEnd,
	dotSize = 'small',
	width = defaultWidth,
	onDrag,
}: Props): JSX.Element => {
	const x = useSharedValue(initialPosition)
	const onDragThrottle = onDrag
		? _.throttle(onDrag, 200, { leading: true, trailing: false })
		: null
	const max = useSharedValue(0)
	const isDragging = useSharedValue(false)
	const { colors } = useTheme()
	const color = colors.primaryText
	const dotWidth = dotSize === 'small' ? dotSizeSmall : dotSizeLarge

	useEffect(() => {
		updatePosition(position * max.value)
	}, [position, initialPosition])

	function updatePosition(pos: number) {
		if (!isDragging.value) {
			let newVal = Math.min(max.value - dotWidth, pos)
			newVal = Math.max(0, newVal)
			x.value = withTiming(newVal, {
				easing: Easing.bezier(0, 0.5, 1, 0.5),
			})
		}
	}

	const handler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { x: number }>({
		onStart: (_, ctx) => {
			isDragging.value = true
			ctx.x = x.value
		},
		onActive: (e, ctx) => {
			let newVal = ctx.x + e.translationX
			newVal = Math.min(max.value - dotWidth, newVal)
			newVal = Math.max(0, newVal)
			x.value = newVal
			if (onDragThrottle) {
				runOnJS(onDragThrottle)(x.value / max.value)
			}
		},
		onEnd: (_) => {
			runOnJS(onSlideEnd)(x.value / max.value)
			isDragging.value = false
		},
	})

	const dotAnimStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: x.value }],
			backgroundColor: color,
			borderColor: colors.background,
		}
	})

	const barWidthStyle = useAnimatedStyle(() => {
		return {
			width: max.value,
		}
	})

	const markedBarWidthStyle = useAnimatedStyle(() => {
		return {
			width: x.value,
		}
	})

	const onLayout = (e: LayoutChangeEvent) => {
		max.value = e.nativeEvent.layout.width
	}

	const commonBarStyle = {
		backgroundColor: color,
		height: 2,
		marginRight: dotWidth,
		transform: [{ translateY: dotWidth / 2 + 1 }],
		opacity: 0.1,
	}

	const barStyle = [commonBarStyle, barWidthStyle]

	const markedBarStyle = [
		{
			...commonBarStyle,
			position: 'absolute' as const,
			top: 0,
			left: 0,
			opacity: 1,
		},
		markedBarWidthStyle,
	]

	const presetStyle = dotPresets[dotSize]

	return (
		<View style={{ width }}>
			<View onLayout={onLayout}>
				<Animated.View style={barStyle} />
				<Animated.View style={markedBarStyle} />
				<PanGestureHandler onGestureEvent={handler} hitSlop={HitSlop.large}>
					<Animated.View style={[presetStyle, dotAnimStyle]} />
				</PanGestureHandler>
			</View>
		</View>
	)
}

const dotPresets = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles
	large: {
		borderRadius: dotSizeLarge / 2,
		width: dotSizeLarge,
		height: dotSizeLarge,
		borderWidth: 2,
		...shadows.default,
	},
	// eslint-disable-next-line react-native/no-unused-styles
	small: {
		borderRadius: dotSizeSmall / 2,
		width: dotSizeSmall,
		height: dotSizeSmall,
		borderWidth: 1,
		...shadows.default,
	},
})

export default SlidableProgress
