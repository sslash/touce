import create from 'zustand'
import { ColorTypes } from '../theme/types'
import { AppStore } from './types'

interface BroadcastMessageState extends AppStore {
	currentMessage: BroadcastMessage | null
	showMessage: (message: BroadcastMessage) => void
	dismissMessage: () => void
}

interface BroadcastMessage {
	message: string
	bg?: ColorTypes
	color?: ColorTypes
}

export const useBroadcastMessages = create<BroadcastMessageState>((set) => ({
	// state
	currentMessage: null,

	// updates
	showMessage: (currentMessage: BroadcastMessage) => set({ currentMessage }),
	dismissMessage: () => set({ currentMessage: null }),
}))
