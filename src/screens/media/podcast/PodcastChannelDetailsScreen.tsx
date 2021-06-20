import { RouteProp } from '@react-navigation/native'
import React, { useCallback, useRef } from 'react'
import { LayoutAnimation } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import LoadingView from '../../../atoms/LoadingView'
import MediaImage, { MediaImageVariant } from '../../../atoms/MediaImage'
import Row from '../../../atoms/Row'
import Body from '../../../atoms/texts/Body'
import Title from '../../../atoms/texts/Title'
import V from '../../../atoms/V'
import { useStrings } from '../../../localization/localizedStrings'
import ExpandingText from '../../../molecules/ExpandingText'
import MediaList from '../../../molecules/mediaList/MediaList'
import { State } from '../../../molecules/mediaList/types'
import Screen from '../../../molecules/screen/Screen'
import { RootStackParamList } from '../../../navigation/types'
import { Episode } from '../../../queries/autogenerate/schemas'
import { useQueueAndCurrentPodcast } from '../../../store/compoundHooks/useQueueAndCurrentPodcast'
import { DateFormat, formatDate } from '../../../utils/date'
import { formatDuration } from '../../../utils/time'
import FollowButton from './components/FollowButton'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'PodcastChannelDetails'>
	route: RouteProp<RootStackParamList, 'PodcastChannelDetails'>
}

const LIMIT = 30

const PodcastChannelDetailsScreen = ({ route }: Props): React.ReactElement => {
	const s = useStrings().strings.podcastsAndMusic
	const offset = useRef(0)
	const routeChannel = route.params.channel
	const {
		isQueued,
		removeEpisode,
		currentEpisode,
		setCurrentEpisode,
	} = useQueueAndCurrentPodcast()
	const episodes = []
	const loading = false
	const error = null
	const hasNextPage = true
	const description = ''
	const isFullscreenLoading = loading && episodes.length === 0
	const isFooterLoading = loading && episodes.length > 0

	const onEndReached = () => {
		if (loading) {
			return
		}

		if (!hasNextPage) {
			return
		}

		offset.current = offset.current + LIMIT
		// TODO call fetch
	}

	// TODO
	// performance (remove image, verify height)
	// verify go back without memory leak

	const epiMapper = useCallback(
		(epi: Episode) => {
			const _isQueued = isQueued(epi.episodeUri)

			const onPress = () => {
				LayoutAnimation.easeInEaseOut()
				_isQueued
					? removeEpisode(epi.episodeUri)
					: setCurrentEpisode({
							...epi,
							description: epi.summary || '',
							imageUri: epi.imageUri || routeChannel.imageUri,
							channelUri: routeChannel.podcastUri,
							durationSeconds: `${epi.durationSeconds || ''}`,
							duration: epi.duration || '',
							channelImageUri: routeChannel.imageUri,
					  })
			}

			const state = _isQueued ? State.UpNext : State.Addable

			return {
				state,
				title: epi.title,
				image: epi.imageUri,
				preTitle: formatDate(epi.published, DateFormat.ShortDate, true),
				subTitle: formatDuration(epi.duration || `${epi.durationSeconds}`),
				accessibilityLabel: epi.title,
				uri: epi.episodeUri,
				onPress,
			}
		},
		[episodes.length, currentEpisode]
	)

	return (
		<Screen testID="PodcastChannelScreen" preset={'fixed'} navPadding>
			<MediaList
				data={episodes.map(epiMapper)}
				onEndReached={onEndReached}
				onEndReachedThreshold={0.9}
				ListHeaderComponent={
					<>
						<Row ai="center" mb={4}>
							<MediaImage
								uri={routeChannel.imageUri}
								variant={MediaImageVariant.Medium}
							/>
							<V ml={4} flex={1}>
								<Title>{routeChannel.title}</Title>
								<Body>{routeChannel.publisherName}</Body>
							</V>
						</Row>
						{!!description && (
							<V mb={4}>
								<ExpandingText>{description}</ExpandingText>
							</V>
						)}
						<FollowButton channel={routeChannel} />
						{isFullscreenLoading && <LoadingView />}
						{!!error && <Body color="error">{s.errors.fetchPodcast}</Body>}
					</>
				}
				ListFooterComponent={isFooterLoading ? <LoadingView safeArea /> : null}
			/>
		</Screen>
	)
}

export default PodcastChannelDetailsScreen
