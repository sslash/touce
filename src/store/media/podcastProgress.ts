import { PlaybackState } from '../../models/music'
import create, { State } from 'zustand'

export interface PodcastProgress extends State {
	progressSeconds: number
	durationSeconds: number
	playbackState: PlaybackState

	startProgressListener: () => NodeJS.Timeout
}

const mockDuration = 60 * 45

export const usePodcastProgress = create<PodcastProgress>((set) => ({
	// state
	progressSeconds: 0,
	durationSeconds: 0,
	playbackState: 'idle',

	// updates
	startProgressListener: () => {
		// TODO: use musicStrategy here
		return setInterval(() => {
			set((s) => {
				const progress = s.progressSeconds
				const nextProgress = progress >= mockDuration ? 0 : progress + 1
				return { progressSeconds: nextProgress }
			})
		}, 1000)
	},
}))
