import React, { useEffect } from 'react'
import { useMusicProgress } from '../store/media/musicProgress'
import { usePodcastProgress } from '../store/media/podcastProgress'

const MediaProgressListeners = (): React.ReactElement => {
	const musicStore = useMusicProgress()
	const podcastStore = usePodcastProgress()

	useEffect(() => {
		const musicListener = musicStore.startProgressListener()
		const podcastListener = podcastStore.startProgressListener()

		return () => {
			clearInterval(musicListener)
			clearInterval(podcastListener)
		}
	}, [])

	return null
}

export default MediaProgressListeners
