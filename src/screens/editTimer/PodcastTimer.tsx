import React, { useState } from 'react'
import { timerPickerItems } from '../../utils/timer'
import TimerTemplate from './TimerTemplate'

interface Props {}

const PodcastTimer = ({}: Props): JSX.Element => {
	const [selected, setSelected] = useState<number>(timerPickerItems[2].value)

	return (
		<TimerTemplate
			title={`The podcast timer controls how long\nmusic plays before we shift to podcasts.`}
			{...{ selected, setSelected }}
		/>
	)
}

export default PodcastTimer
