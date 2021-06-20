import create from 'zustand'
import { MusicItem } from '../../models/music'
import { playableMusicItem } from '../../screens/media/music/tests/musicItems.fixture'
import { AppStore } from '../types'

export interface CurrentMusicItem extends AppStore {
	musicItem: MusicItem
	setCurrentMusicItem: (item: MusicItem) => void
}

const INITIAL_ITEM = playableMusicItem

export const useCurrentMusicItem = create<CurrentMusicItem>((set) => ({
	// state
	musicItem: INITIAL_ITEM,

	// updates
	setCurrentMusicItem: (item: MusicItem) => set({ musicItem: item }),
}))
