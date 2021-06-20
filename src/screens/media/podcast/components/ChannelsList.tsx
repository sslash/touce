import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback } from 'react'
import { useStrings } from '../../../../localization/localizedStrings'
import { ChannelFromApi } from '../../../../models/podcasts'
import { RootStackParamList } from '../../../../navigation/types'
import GroupedItemsList from '../../../../molecules/groupedItemsList/GroupedItemsList'
import { RowVariant, State } from '../../../../molecules/mediaList/types'
import { contentStyle } from '../../constants'
import { channelsFixture } from '../channels.fixture'

interface Props {
	nav: StackNavigationProp<RootStackParamList, 'Podcasts'>
}

const ChannelsList = ({ nav }: Props): React.ReactElement => {
	const strings = useStrings().strings.podcastsAndMusic.discoverTab

	const onPressSeeAll = (sourceId: string) => () => {
		nav.navigate('EpisodeList', { sourceId })
	}

	const onPressChannelScreen = (channel: ChannelFromApi) => () => {
		nav.navigate('PodcastChannel', { channel })
	}

	const mapChannel = useCallback((channel: ChannelFromApi) => {
		return {
			title: channel.title,
			subTitle: channel.publisherName,
			accessibilityLabel: channel.title,
			image: channel.imageUri,
			uri: channel.podcastUri,
			onPress: () => onPressChannelScreen(channel),
			state: State.NA,
		}
	}, [])

	return (
		<GroupedItemsList
			containerStyle={contentStyle}
			title={strings.shows}
			headingCtaText={strings.seeAll}
			onPressHeadingCta={onPressSeeAll('shows')}
			items={channelsFixture.map(mapChannel)}
			variant={RowVariant.Simple}
		/>
	)
}

export default ChannelsList
