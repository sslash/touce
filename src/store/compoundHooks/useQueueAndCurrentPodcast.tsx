import _ from 'lodash'
import { EpisodeFromApi } from '../../models/podcasts'
import analyticsClient from '../../utils/analyticsClient'
import { useCurrentPodcastEpisode } from '../media/currentPodcastEpisode'
import { usePodcastQueue } from '../media/podcastQueue'

interface ReturnProps {
	queueLookupKeys: Record<string, boolean>
	queueAndCurrent: EpisodeFromApi[]
	isQueued: (uri: string) => boolean
	currentEpisode?: EpisodeFromApi
	removeEpisode: (uri: string) => void
	setCurrentEpisode: (epi: EpisodeFromApi) => void
}

export const useQueueAndCurrentPodcast = (): ReturnProps => {
	const { episode: currentEpisode, setCurrentEpisode } = useCurrentPodcastEpisode()
	const { queue, addEpisode, removeEpisode } = usePodcastQueue()

	const isCurrent = (uri: string) => currentEpisode?.episodeUri === uri

	const removeEpisodeAndChangeCurrent = (uri: string) => {
		if (isCurrent(uri)) {
			const nextCurrent = queue[0]
			setCurrentEpisode(nextCurrent)
			removeEpisode(nextCurrent.episodeUri)
		} else {
			removeEpisode(uri)
		}
	}

	const setNewCurrentAndMoveOldToQueue = (toAdd: EpisodeFromApi) => {
		const alreadyCurrent = currentEpisode.episodeUri === toAdd.episodeUri
		if (alreadyCurrent) {
			return
		}

		const prevCurrent = _.merge({}, currentEpisode)
		setCurrentEpisode(toAdd)
		addEpisode(prevCurrent)
		removeEpisode(toAdd.episodeUri) // remove from queue (if existed in queue)

		analyticsClient.setEmpathyProp('podcast show', toAdd.channelTitle)
	}

	// used for fast lookups
	const queueLookupKeys: Record<string, boolean> = queue.reduce(
		(all, epi) => ({
			...all,
			[epi.episodeUri]: true,
		}),
		{}
	)

	const queueAndCurrent = currentEpisode ? [currentEpisode, ...queue] : queue

	const isQueued = (uri: string) => isCurrent(uri) || queueLookupKeys[uri]

	return {
		isQueued,
		queueAndCurrent,
		queueLookupKeys,
		currentEpisode,
		removeEpisode: removeEpisodeAndChangeCurrent,
		setCurrentEpisode: setNewCurrentAndMoveOldToQueue,
	}
}
