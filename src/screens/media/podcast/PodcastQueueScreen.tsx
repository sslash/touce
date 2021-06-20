import React, { useCallback, useState } from 'react'
import { LayoutAnimation } from 'react-native'
import withRenderAfterInteraction from '../../../hocs/withRenderAfterInteraction'
import { useStrings } from '../../../localization/localizedStrings'
import { EpisodeFromApi } from '../../../models/podcasts'
import MediaList from '../../../molecules/mediaList/MediaList'
import { State } from '../../../molecules/mediaList/types'
import { useQueueAndCurrentPodcast } from '../../../store/compoundHooks/useQueueAndCurrentPodcast'
import { DateFormat, formatDate } from '../../../utils/date'
import { formatDuration } from '../../../utils/time'
import { contentStyle } from '../constants'
import EditButton from './components/EditButton'
import EmptyPodcastScreen from './EmptyPodcastScreen'

const PodcastQueueScreen = (): JSX.Element => {
	const [isEditMode, setIsEditMode] = useState(false)
	const {
		currentEpisode,
		queueAndCurrent,
		removeEpisode,
		setCurrentEpisode,
	} = useQueueAndCurrentPodcast()
	const strings = useStrings().strings.podcastsAndMusic

	const onSetEditMode = () => {
		LayoutAnimation.easeInEaseOut()
		setIsEditMode((edit) => !edit)
	}

	const mapItem = useCallback(
		(epi: EpisodeFromApi) => {
			const state = isEditMode
				? State.Deletable
				: epi.episodeUri === currentEpisode?.episodeUri
				? State.UpNextFull
				: State.Playable

			const onPress = () => {
				LayoutAnimation.easeInEaseOut()
				if (isEditMode) {
					removeEpisode(epi)
				} else {
					setCurrentEpisode(epi)
				}
			}

			return {
				state,
				title: epi.title,
				image: epi.imageUri || epi.channelImageUri,
				preTitle: formatDate(epi.published, DateFormat.ShortDate, true),
				subTitle: formatDuration(epi.duration || epi.durationSeconds),
				accessibilityLabel: epi.title,
				uri: epi.episodeUri,
				onPress,
			}
		},
		[isEditMode, queueAndCurrent.length, currentEpisode?.episodeUri]
	)

	if (queueAndCurrent.length) {
		return (
			<MediaList
				style={contentStyle}
				ListHeaderComponent={<EditButton {...{ strings, isEditMode, onSetEditMode }} />}
				data={queueAndCurrent.map(mapItem)}
				refreshKey={currentEpisode?.episodeUri}
				showFooter
			/>
		)
	} else {
		return <EmptyPodcastScreen />
	}
}

export default withRenderAfterInteraction(PodcastQueueScreen)
