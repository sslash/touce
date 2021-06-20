import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import CircularProgressbar from '../../../atoms/circularTimer/CircularProgressbar'
import V from '../../../atoms/V'
import { useShiftMode, useWorkoutTimer } from '../../../store'
import { getCountdownProgress } from '../../../store/workoutTimer'
import FreezeButtonMemoed from './FreezeButton'
import TimerLabel from './TimerLabel'

interface Props {
	currentCountdownSeconds: number
	progress: number
	isFreezed: boolean
	toggleFreeze: () => void
}

const CircularProgressAndTimerLabelMemoed = memo(
	({ currentCountdownSeconds, progress, isFreezed, toggleFreeze }: Props): React.ReactElement => {
		const shouldAnimate = progress < 0.99

		return (
			<V ai="center" style={styles.container}>
				<CircularProgressbar
					radius={152}
					strokeWidth={18}
					bg={'secundaryTransparent100'}
					progress={progress || 0}
					duration={shouldAnimate ? 1000 : 0}
				/>

				<View style={[StyleSheet.absoluteFill, styles.labelsWrapper]}>
					<TimerLabel {...{ currentCountdownSeconds, isFreezed }} />
					<FreezeButtonMemoed {...{ isFreezed, toggleFreeze }} />
				</View>
			</V>
		)
	},
	isEqual
)

function isEqual(before: Props, after: Props) {
	return (
		before.currentCountdownSeconds === after.currentCountdownSeconds &&
		before.progress === after.progress &&
		before.isFreezed === after.isFreezed
	)
}

const CircularProgressAndTimerLabelContainer = (): React.ReactElement => {
	const workoutTimer = useWorkoutTimer()
	const liftMode = useShiftMode()
	const progress = getCountdownProgress(workoutTimer, liftMode.isLiftMode)

	return (
		<CircularProgressAndTimerLabelMemoed
			{...{
				currentCountdownSeconds: workoutTimer.currentCountdownSeconds,
				progress,
				isFreezed: workoutTimer.isFreezed,
				toggleFreeze: workoutTimer.toggleFreeze,
			}}
		/>
	)
}

const styles = StyleSheet.create({
	container: { zIndex: 10 },
	labelsWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default CircularProgressAndTimerLabelContainer
