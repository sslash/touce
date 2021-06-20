import React from 'react'
import { useMinsAndSecsTimerData } from '../../../../hooks/useMinsAndSecsTimerData'
import { useStrings } from '../../../../localization/localizedStrings'
import { useWorkoutTimer } from '../../../../store'
import { DialogChildProps } from '../../types'
import TimerViewTemplate from './TimerViewTemplate'

const RestTimer = ({ hideDialog }: DialogChildProps): React.ReactElement => {
	const { restTimer, isRestTimerEnabled } = useWorkoutTimer.getState()
	const data = useMinsAndSecsTimerData({
		shiftMode: 'rest',
		defaultSeconds: restTimer,
		defaultIsOn: isRestTimerEnabled,
	})
	const strings = useStrings().strings.timer

	return <TimerViewTemplate {...data} bodyText={strings.restTimer} onSave={hideDialog} />
}

export default RestTimer
