import React from 'react'
import { useMinsAndSecsTimerData } from '../../../../hooks/useMinsAndSecsTimerData'
import { useStrings } from '../../../../localization/localizedStrings'
import { useWorkoutTimer } from '../../../../store'
import { DialogChildProps } from '../../types'
import TimerViewTemplate from './TimerViewTemplate'

const LiftTimer = ({ hideDialog }: DialogChildProps): React.ReactElement => {
	const { liftTimer, isLiftTimerEnabled } = useWorkoutTimer.getState()
	const data = useMinsAndSecsTimerData({
		shiftMode: 'lift',
		defaultSeconds: liftTimer,
		defaultIsOn: isLiftTimerEnabled,
	})

	const strings = useStrings().strings.timer

	return <TimerViewTemplate {...data} onSave={hideDialog} bodyText={strings.liftTimer} />
}

export default LiftTimer
