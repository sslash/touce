import create from 'zustand'
import { EpisodeFromApi } from '../../models/podcasts'
import { episodesFixture } from '../../screens/media/podcast/podcasts.fixture'
import { AppStore } from '../types'

export interface CurrentPodcastEpisode extends AppStore {
	episode: EpisodeFromApi
	setCurrentEpisode: (epi: EpisodeFromApi) => void
}

const INITIAL_EPISODE = episodesFixture[5]

export const useCurrentPodcastEpisode = create<CurrentPodcastEpisode>((set) => ({
	// state
	episode: INITIAL_EPISODE,

	// updates
	setCurrentEpisode: (episode: EpisodeFromApi) => set({ episode }),
}))
