import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { ScrollView } from 'react-native'
import Spacer from '../../../atoms/Spacer'
import withRenderAfterInteraction from '../../../hocs/withRenderAfterInteraction'
import { useOnMount } from '../../../hooks/useOnMount'
import { useStrings } from '../../../localization/localizedStrings'
import { EpisodeFromApi } from '../../../models/podcasts'
import GroupedItemsList from '../../../molecules/groupedItemsList/GroupedItemsList'
import { DetailItemViewModel, RowVariant, State } from '../../../molecules/mediaList/types'
import ScreenFooterMemoed from '../../../molecules/ScreenFooter'
import { animationDuration } from '../../../molecules/TabView/constants'
import { RootStackParamList } from '../../../navigation/types'
import { useQueueAndCurrentPodcast } from '../../../store/compoundHooks/useQueueAndCurrentPodcast'
import { DateFormat, formatDate } from '../../../utils/date'
import { formatDuration } from '../../../utils/time'
import { contentStyle } from '../constants'
import ChannelsList from './components/ChannelsList'
import { episodesFixture } from './podcasts.fixture'

const space = 24

const PodcastDiscoverScreen = (): JSX.Element => {
	const {
		isQueued,
		queueAndCurrent,
		currentEpisode,
		setCurrentEpisode,
		removeEpisode,
	} = useQueueAndCurrentPodcast()
	const renderAll = useOnMount(animationDuration)
	const nav = useNavigation<StackNavigationProp<RootStackParamList, 'Podcasts'>>()
	const strings = useStrings().strings.podcastsAndMusic.discoverTab

	const mapEpi = (epi: EpisodeFromApi): DetailItemViewModel => {
		const isAdded = isQueued(epi.episodeUri)
		function onPress() {
			isAdded ? removeEpisode(epi) : setCurrentEpisode(epi)
		}

		return {
			title: epi.title,
			image: epi.imageUri || epi.channelImageUri,
			preTitle: formatDate(epi.published, DateFormat.ShortDate, true),
			subTitle: formatDuration(epi.duration || epi.durationSeconds),
			uri: epi.episodeUri,
			state: isAdded ? State.UpNext : State.Playable,
			onPress,
			accessibilityLabel: epi.title,
		}
	}

	const onPressSeeAll = (sourceId: string) => () => {
		nav.navigate('EpisodeList', { sourceId })
	}

	const refreshKey = [currentEpisode?.episodeUri, `${queueAndCurrent.length}`]

	return (
		<ScrollView removeClippedSubviews>
			<GroupedItemsList
				containerStyle={contentStyle}
				title={strings.lasterInNo}
				items={episodesFixture.map(mapEpi)}
				variant={RowVariant.Detailed}
				headingCtaText={strings.seeAll}
				onPressHeadingCta={onPressSeeAll('latest')}
				refreshKey={refreshKey}
			/>

			<Spacer y={space} />
			<GroupedItemsList
				containerStyle={contentStyle}
				title={strings.news}
				items={episodesFixture.slice(10, 30).map(mapEpi)}
				variant={RowVariant.Detailed}
				headingCtaText={strings.seeAll}
				onPressHeadingCta={onPressSeeAll('news')}
				refreshKey={refreshKey}
			/>

			{renderAll && (
				<>
					<Spacer y={space} />
					<GroupedItemsList
						containerStyle={contentStyle}
						title={strings.fitness}
						items={episodesFixture.slice(16, 30).map(mapEpi)}
						variant={RowVariant.Detailed}
						headingCtaText={strings.seeAll}
						onPressHeadingCta={onPressSeeAll('fitness')}
						refreshKey={refreshKey}
					/>

					<Spacer y={space} />
					<GroupedItemsList
						containerStyle={contentStyle}
						title={strings.calm}
						items={episodesFixture.slice(20, 30).map(mapEpi)}
						variant={RowVariant.Detailed}
						headingCtaText={strings.seeAll}
						onPressHeadingCta={onPressSeeAll('calm')}
						refreshKey={refreshKey}
					/>

					<Spacer y={space} />
					<ChannelsList {...{ nav }} />

					<ScreenFooterMemoed />
				</>
			)}
		</ScrollView>
	)
}

export default withRenderAfterInteraction(PodcastDiscoverScreen)
