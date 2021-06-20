import { useWorkoutTimer } from './workoutTimer'
import { useCurrentActivityTimer } from './currentActivityTimer'
import { useExposedTo } from './exposedTo'
import { useFollowedPodcastChannels } from './media/followedPodcastChannels'
import { usePodcastQueue } from './media/podcastQueue'
import { useCurrentPodcastEpisode } from './media/currentPodcastEpisode'
import { useShiftMode } from './shiftMode'
import { AppStore } from './types'
import { useWorkoutState } from './workoutState'
import { useCurrentMusicItem } from './media/currentMusicItem'

export const useAllAppStores = (): AppStore[] => [
	useCurrentActivityTimer(),
	useExposedTo(),
	useFollowedPodcastChannels(),
	usePodcastQueue(),
	useCurrentPodcastEpisode(),
	useShiftMode(),
	useWorkoutState(),
	useWorkoutTimer(),
	useCurrentMusicItem(),
]

export {
	useCurrentActivityTimer,
	useExposedTo,
	useFollowedPodcastChannels,
	usePodcastQueue,
	useCurrentPodcastEpisode,
	useShiftMode,
	useWorkoutState,
	useWorkoutTimer,
	useCurrentMusicItem,
}
