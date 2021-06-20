import React from 'react'
import Button from '../../../../atoms/Button'
import { useStrings } from '../../../../localization/localizedStrings'
import { ChannelFromApi } from '../../../../models/podcasts'
import { useFollowedPodcastChannels } from '../../../../store'

interface Props {
	channel: ChannelFromApi
}

const FollowButton = ({ channel }: Props): React.ReactElement => {
	const { channels, toggleFollowChannel } = useFollowedPodcastChannels()
	const strings = useStrings().strings.podcastsAndMusic
	const isFollowing = channels.find((c) => c.podcastUri === channel.podcastUri)

	const onFollow = () => toggleFollowChannel(channel)

	return (
		<Button onPress={onFollow} mb={6}>
			{isFollowing ? strings.unfollow : strings.follow}
		</Button>
	)
}

export default FollowButton
