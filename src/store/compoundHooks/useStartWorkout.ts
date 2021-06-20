import { useWorkoutState } from '../workoutState'
import { useCurrentActivityTimer, useWorkoutTimer } from '..'
import analyticsClient from '../../utils/analyticsClient'

export const useStartWorkout = (): (() => void) => {
	const { startWorkoutWithTimer } = useWorkoutTimer()
	const currentTimer = useCurrentActivityTimer()
	const workoutState = useWorkoutState()

	const onStartWorkout = () => {
		workoutState.startWorkout()
		startWorkoutWithTimer(currentTimer.activityTimer)
		analyticsClient.primaryAction()
	}

	return onStartWorkout
}
