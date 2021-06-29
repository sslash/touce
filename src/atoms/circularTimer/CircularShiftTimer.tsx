import * as React from 'react'
import { Animated, Easing, View } from 'react-native'
import Svg, { Circle, G } from 'react-native-svg'
import { useTheme } from '../../theme/themeContext'
import { ColorTypes } from '../../theme/types'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export interface Props {
	percentage: number
	selectedColor?: ColorTypes
	bgColor?: ColorTypes
	size?: number
	strokeWidth?: number
	duration?: number
	backgroundOpacity?: number
}

const CircularShiftTimer = ({
	percentage = 75,
	size = 100,
	strokeWidth = 15,
	duration = 350,
	bgColor = 'restColor',
	selectedColor = 'liftColor',
	backgroundOpacity = 0.1,
}: Props): React.ReactElement => {
	const { colors } = useTheme()
	const animated = React.useRef<Animated.Value>(new Animated.Value(0)).current
	const circleRef = React.useRef<View>(null)
	const circumference = 2 * Math.PI * size
	const halfCircle = size + strokeWidth

	React.useEffect(() => {
		Animated.timing(animated, {
			delay: 1000,
			toValue: percentage,
			duration,
			useNativeDriver: true,
			easing: Easing.out(Easing.ease),
		}).start()
		animated.addListener((v) => {
			const maxPerc = (100 * v.value) / 100
			const strokeDashoffset = circumference - (circumference * maxPerc) / 100
			if (circleRef?.current) {
				circleRef.current.setNativeProps({
					strokeDashoffset,
				})
			}
		})

		return () => {
			animated.removeAllListeners()
		}
	}, [percentage])

	return (
		<View style={{ width: size * 2, height: size * 2 }}>
			<Svg
				height={size * 2}
				width={size * 2}
				viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
			>
				<G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
					<AnimatedCircle
						stroke={colors[bgColor]}
						cx="50%"
						cy="50%"
						r={size}
						fill="transparent"
						strokeWidth={strokeWidth}
						strokeLinejoin="bevel"
						strokeOpacity={backgroundOpacity}
					/>
					<AnimatedCircle
						stroke={colors[selectedColor]}
						ref={circleRef}
						cx="50%"
						cy="50%"
						r={size}
						fill="transparent"
						strokeWidth={strokeWidth}
						strokeLinecap="butt"
						strokeDashoffset={circumference}
						strokeDasharray={circumference}
					/>
				</G>
			</Svg>
		</View>
	)
}

export default CircularShiftTimer
