import React from 'react'
import NowPlayingView from '../../../molecules/nowPlayingView/NowPlayingView'
import PodcastControlRow from '../../../molecules/PodcastControlRow'
import { useCurrentPodcastEpisode } from '../../../store'
import PodcastNotes from './PodcastNotes'
import PodcastProgressBar from './PodcastProgressBar'

const PodcastNowPlayingScreen = (): JSX.Element => {
	const { episode } = useCurrentPodcastEpisode()

	const onRewind = () => null
	const onForward = () => null
	const onSpeed = () => null
	const onTogglePlay = () => null
	const onShare = () => null

	return (
		<NowPlayingView
			imageUri={episode.imageUri}
			title={episode.channelTitle}
			subTitle={episode.title}
			PlaybackControlComponent={
				<PodcastControlRow
					speed={1}
					isPaused={false}
					{...{ onRewind, onForward, onSpeed, onTogglePlay, onShare }}
				/>
			}
			ProgressComponent={<PodcastProgressBar />}
		>
			<PodcastNotes />
		</NowPlayingView>
	)
}

export default PodcastNowPlayingScreen
