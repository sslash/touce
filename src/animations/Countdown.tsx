import React, { useEffect } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import { ReText } from 'react-native-redash'
import Bg from '../atoms/Bg'
import { useStartWorkout } from '../store/compoundHooks/useStartWorkout'
import { FontFamily, FontWeight } from '../theme/fonts'
import lightColors from '../theme/lightColors'
import { screenHeight } from '../theme/metrics'

interface Props {
	onFinished: () => void
}

const Countdown = ({ onFinished }: Props): JSX.Element => {
	const count = useSharedValue(3)
	const onStartWorkout = useStartWorkout()

	useEffect(() => {
		const intr = setInterval(() => {
			if (count.value > 0) {
				count.value -= 1
			} else {
				clearInterval(intr)
				onStartWorkout()
				onFinished()
			}
		}, 1000)

		return () => {
			clearInterval(intr)
		}
	}, [])

	const getTop = (countVal: number) => {
		'worklet'
		const counter = 3 - countVal
		return (screenHeight / 3) * counter
	}

	const formattedValue = useDerivedValue(() => `${count.value}`)
	const style = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: withTiming(getTop(count.value)) }],
			width: '100%',
		}
	})

	const textStyle = useAnimatedStyle(() => {
		return {
			marginBottom: withTiming(getTop(count.value)),
		}
	})

	const bgStyle = useAnimatedStyle(() => {
		const top = count.value / 3
		return {
			backgroundColor: withTiming(`rgba(0, 0, 0, ${top + 0.01})`),
			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		}
	})

	return (
		<Modal visible transparent>
			<Animated.View style={bgStyle}></Animated.View>
			<View style={{ flex: 1, alignItems: 'flex-end', width: '100%' }}>
				<Animated.View style={style}>
					<Bg bg="primary600" style={styles.bg}>
						<Animated.View style={textStyle}>
							<ReText style={styles.text} text={formattedValue} />
						</Animated.View>
					</Bg>
				</Animated.View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: 100,
		fontWeight: FontWeight.Fat,
		fontStyle: 'italic',
		color: lightColors.background,
		fontFamily: FontFamily.Default,
	},
	bg: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default Countdown
