import AsyncStorage from '@react-native-async-storage/async-storage'
import _ from 'lodash'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { ChannelFromApi, PersistedChannel } from '../../models/podcasts'
import { channelsFixture } from '../../screens/media/podcast/channels.fixture'
import { AppStore } from '../types'
import { FOLLOWED_CHANNELS } from './../../utils/storage/keys'

const initialState = [
	_.sample(channelsFixture),
	_.sample(channelsFixture),
	_.sample(channelsFixture),
] // []

export interface FollowedPodcastChannels extends AppStore {
	channels: PersistedChannel[]
	toggleFollowChannel: (channel: PersistedChannel) => void
}

export const useFollowedPodcastChannels = create<FollowedPodcastChannels>(
	persist(
		(set) => ({
			// state
			channels: initialState,

			// updates
			toggleFollowChannel: (channel: ChannelFromApi) =>
				set((state) => {
					const index = state.channels.findIndex(
						(c) => c.podcastUri === channel.podcastUri
					)
					if (index > -1) {
						return {
							channels: [
								...state.channels.slice(0, index),
								...state.channels.slice(index + 1),
							],
						}
					} else {
						return { channels: [channel, ...state.channels] }
					}
				}),
		}),
		{
			name: FOLLOWED_CHANNELS,
			getStorage: () => AsyncStorage,
		}
	)
)
