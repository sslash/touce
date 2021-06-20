import create from 'zustand'
import { EpisodeFromApi } from '../../models/podcasts'
import { episodesFixture } from '../../screens/media/podcast/podcasts.fixture'
import { AppStore } from '../types'

const initialQueue = episodesFixture.slice(0, 3) // []
export interface PodcastQueueState extends AppStore {
	// TODO: change type to PersistedEpisode, and persist episodes!
	queue: EpisodeFromApi[]
	addEpisode: (epi: EpisodeFromApi) => void
	removeEpisode: (uri: string) => void
}

export const usePodcastQueue = create<PodcastQueueState>((set, get) => ({
	// state
	queue: initialQueue,

	// updates
	addEpisode: (episode: EpisodeFromApi) => set((state) => ({ queue: [episode, ...state.queue] })),
	removeEpisode: (uri: string) =>
		set((state) => ({
			queue: state.queue.filter((epi) => epi.episodeUri !== uri),
		})),
}))
