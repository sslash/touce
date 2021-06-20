import * as React from 'react'
import { Animated, Easing, View } from 'react-native'
import Svg, { Circle, Defs, G, LinearGradient, Stop } from 'react-native-svg'
import { useTheme } from '../../theme/themeContext'
import { ColorTypes } from '../../theme/types'

interface Props {
	progress: number
	radius: number
	strokeWidth?: number
	duration?: number
	bg: ColorTypes
	max?: number
}

const CircularProgressbar = ({
	progress,
	radius = 40,
	strokeWidth = 10,
	duration = 1000,
	max = 100,
	bg,
}: Props): JSX.Element => {
	const percentage = progress * 100
	const animated = React.useRef(new Animated.Value(0)).current
	const circleRef = React.useRef()
	const circumference = 2 * Math.PI * radius
	const halfCircle = radius + strokeWidth
	const { colors } = useTheme()

	const animation = (toValue: number) => {
		return Animated.timing(animated, {
			toValue,
			duration,
			useNativeDriver: true,
			easing: Easing.linear,
		}).start()
	}

	React.useEffect(() => {
		animation(percentage)
		animated.addListener((v) => {
			const maxPerc = (100 * v.value) / max
			const strokeDashoffset = circumference - (circumference * maxPerc) / 100

			circleRef.current?.setNativeProps({
				strokeDashoffset,
			})
		})

		return () => {
			animated.removeAllListeners()
		}
	}, [max, percentage])

	return (
		<View style={{ width: radius * 2, height: radius * 2 }}>
			<Svg
				height={radius * 2}
				width={radius * 2}
				viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
			>
				<Defs>
					<LinearGradient
						id="prefix__paint0_linear"
						x1={142.5}
						y1={0}
						x2={142.5}
						y2={285}
						gradientUnits="userSpaceOnUse"
					>
						<Stop stopColor={colors.primary500} />
						<Stop offset={1} stopColor={colors.primary800} />
					</LinearGradient>
				</Defs>
				<G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
					<Circle
						ref={circleRef}
						cx="50%"
						cy="50%"
						r={radius}
						fill="transparent"
						stroke={'url(#prefix__paint0_linear)'}
						strokeWidth={strokeWidth}
						strokeLinecap="round"
						strokeDashoffset={circumference}
						strokeDasharray={circumference}
					/>
					<Circle
						cx="50%"
						cy="50%"
						r={radius}
						fill="transparent"
						stroke={colors[bg]}
						strokeWidth={strokeWidth}
						strokeLinejoin="round"
					/>
				</G>
			</Svg>
		</View>
	)
}

export default CircularProgressbar
