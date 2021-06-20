import React, { useState } from 'react'
import { timerPickerItems } from '../../utils/timer'
import TimerTemplate from './TimerTemplate'

interface Props {}

const MusicTimer = ({}: Props): JSX.Element => {
	const [selected, setSelected] = useState<number>(timerPickerItems[2].value)

	return (
		<TimerTemplate
			title={`The music timer controls how long\n music plays before we shift to podcasts.`}
			{...{ selected, setSelected }}
		/>
	)
}

export default MusicTimer
