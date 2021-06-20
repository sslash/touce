import React from 'react'
import { Strings } from '../../../localization/types'
import Body from '../../../atoms/texts/Body'

interface Props {
	strings: Strings['podcastsAndMusic']['podcastSearch']
}

const PodcastSearchError = ({ strings }: Props): React.ReactElement => {
	return (
		<Body color="error" fw="DemiBold">
			{strings.error}
		</Body>
	)
}

export default PodcastSearchError
