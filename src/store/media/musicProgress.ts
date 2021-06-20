import create, { State } from 'zustand'
import { PlaybackState } from './../../models/music'

export interface MusicProgress extends State {
	progressSeconds: number
	durationSeconds: number
	playbackState: PlaybackState

	startProgressListener: () => NodeJS.Timeout
}

const mockDuration = 60 * 5

export const useMusicProgress = create<MusicProgress>((set) => ({
	// state
	progressSeconds: 0,
	durationSeconds: mockDuration,
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
