import React from 'react'
import { PixelRatio } from 'react-native'
import Animated, { multiply, useSharedValue } from 'react-native-reanimated'
import { mix } from 'react-native-redash'
import Svg, { Circle, SvgProps } from 'react-native-svg'
import { useTheme } from '../../theme/themeContext'
import { ColorTypes } from '../../theme/types'

interface Props {
	size?: number
	strokeWidth?: number
	restColor?: ColorTypes
	liftColor?: ColorTypes
	liftFraction?: number
	restOpacity?: number
	liftOpacity?: number
	strokeLinecap?: 'round' | 'butt' | 'square'
	dontAnimate?: boolean
	style?: SvgProps['style']
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const CircularShiftTimer: React.FC<Props> = ({
	style,
	size = 100,
	strokeWidth = 15,
	restColor = 'restColor',
	liftColor = 'liftColor',
	liftFraction = 0.5,
	restOpacity = 1,
	liftOpacity = 1,
	strokeLinecap = 'butt',
	dontAnimate = false,
}) => {
	const { colors } = useTheme()
	const liftProgress = useSharedValue(dontAnimate ? liftFraction : 0)
	const restProgress = useSharedValue(dontAnimate ? 1 - liftFraction : 0)

	const _liftColor = colors[liftColor]
	const _restColor = colors[restColor]

	const r = PixelRatio.roundToNearestPixel((size - strokeWidth) / 2)
	const cx = PixelRatio.roundToNearestPixel(size / 2)
	const cy = PixelRatio.roundToNearestPixel(size / 2)
	const circumference = PixelRatio.roundToNearestPixel(r * 2 * Math.PI)

	const restArc = mix(restProgress.value, 0, Math.PI * 2)
	const liftArc = mix(liftProgress.value, 0, Math.PI * 2)

	const restDashOffset = multiply(restArc, r)
	const liftDashOffset = multiply(-1, multiply(liftArc, r))

	const liftStyle = { opacity: liftOpacity }
	const restStyle = {
		opacity: restOpacity,
	}

	return (
		<Svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			style={[{ transform: [{ rotate: '270deg' }] }, style]}
		>
			<AnimatedCircle
				stroke={_liftColor}
				fill="none"
				strokeDasharray={`${circumference}, ${circumference}`}
				strokeWidth={strokeWidth}
				{...{
					style: liftStyle,
					cx,
					cy,
					r,
					strokeDashoffset: liftDashOffset,
					strokeLinecap,
				}}
			/>
			<AnimatedCircle
				stroke={_restColor}
				fill="none"
				strokeDasharray={`${circumference}, ${circumference}`}
				strokeWidth={strokeWidth}
				{...{
					cx,
					cy,
					r,
					strokeDashoffset: restDashOffset,
					strokeLinecap,
					style: restStyle,
				}}
			/>
		</Svg>
	)
}

export default CircularShiftTimer
