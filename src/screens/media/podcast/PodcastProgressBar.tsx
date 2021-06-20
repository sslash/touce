import React, { useEffect, useState } from 'react'
import SlidableProgressBar from '../../../molecules/SlidableProgress/SlidableProgressBar'
import { secsToColonParts } from '../../../utils/time'

interface Props {}

const PodcastProgressBar: React.FC<Props> = ({}) => {
	const [position, setPosition] = useState(40)
	const duration = 368
	const leftLabel = secsToColonParts(position)
	const rightLabel = secsToColonParts(duration)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setPosition((p) => p + 1)
		}, 1000)

		return () => clearTimeout(timeout)
	}, [position])

	return (
		<SlidableProgressBar
			{...{ position, duration, leftLabel, rightLabel }}
			onSlideEnd={setPosition}
		/>
	)
}

export default PodcastProgressBar
