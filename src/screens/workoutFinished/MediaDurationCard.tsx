import React from 'react'
import Card from '../../atoms/Card'
import Spacer from '../../atoms/Spacer'
import Caption from '../../atoms/texts/Caption'
import { useStrings } from '../../localization/localizedStrings'
import MediaDurationRow from './MediaDurationRow'

const MediaDurationCard = (): JSX.Element => {
	const strings = useStrings().strings.workoutFinished
	return (
		<Card size="small" needsViewWrapping>
			<Caption color="grey500" mb={2}>
				{strings.restDuration}
			</Caption>
			<MediaDurationRow shiftMode="rest" />
			<Spacer y={24} />
			<Caption color="grey500" mb={2}>
				{strings.liftDuration}
			</Caption>
			<MediaDurationRow shiftMode="lift" />
		</Card>
	)
}

export default MediaDurationCard
