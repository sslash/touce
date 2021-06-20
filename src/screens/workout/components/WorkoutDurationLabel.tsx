import React from 'react'
import Lead2 from '../../../atoms/texts/Lead2'
import { useWorkoutTimer } from '../../../store'
import { getWorkoutDuration } from '../../../store/workoutTimer'
import { ColorTypes } from '../../../theme/types'
import { secsToColonParts } from '../../../utils/time'

interface Props {
	color: ColorTypes
	darkColor: ColorTypes
}

const WorkoutDurationLabel = ({ color, darkColor }: Props): React.ReactElement => {
	const timerState = useWorkoutTimer()

	return (
		<Lead2 fw="Bold" {...{ color, darkColor }}>
			{secsToColonParts(getWorkoutDuration(timerState))}
		</Lead2>
	)
}

export default WorkoutDurationLabel
