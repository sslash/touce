import React, { useCallback } from 'react'
import Secundary from '../../../atoms/texts/Secundary'
import V from '../../../atoms/V'
import { useStrings } from '../../../localization/localizedStrings'
import { Track } from '../../../models/music'
import MediaList from '../../../molecules/mediaList/MediaList'
import { RowVariant } from '../../../molecules/mediaList/types'
import MusicControlRow from '../../../molecules/MusicControlRow'
import NowPlayingView from '../../../molecules/nowPlayingView/NowPlayingView'
import { useCurrentMusicItem } from '../../../store'
import { sectionLabelColor } from '../podcast/constants'
import PodcastProgressBar from '../podcast/PodcastProgressBar'
import { tracks } from './tests/tracks.fixture'

// TODO:
const MusicNowPlayingScreen = (): React.ReactElement => {
	const { musicItem } = useCurrentMusicItem()
	const strings = useStrings().strings.podcastsAndMusic

	const onPress = (uri: string) => {}
	const onShuffle = () => null
	const onPrevious = () => null
	const onNext = () => null
	const onTogglePlay = () => null
	const onShare = () => null

	const mapTrack = useCallback(
		(track: Track) => ({
			title: track.name,
			subTitle: track.albumName || track.artistName,
			image: track.image,
			uri: track.uri,
			accessibilityLabel: track.name,
			onPress,
		}),
		[]
	)

	return (
		<NowPlayingView
			imageUri={musicItem.imageUri}
			title={musicItem.title}
			subTitle={musicItem.subTitle}
			PlaybackControlComponent={
				<MusicControlRow
					isPaused
					{...{ onShuffle, onPrevious, onNext, onTogglePlay, onShare }}
				/>
			}
			ProgressComponent={<PodcastProgressBar />}
		>
			<V width="100%" jc="flex-start">
				<V mhm mb={2}>
					<Secundary fw="Bold" color={sectionLabelColor}>
						{strings.upNext}
					</Secundary>
				</V>
				<MediaList data={tracks.map(mapTrack)} variant={RowVariant.Compact} />
			</V>
		</NowPlayingView>
	)
}

export default MusicNowPlayingScreen
