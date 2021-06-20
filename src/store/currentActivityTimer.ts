import create from 'zustand'
import { createDefaultTimer, SimpleOrAdvancedTimer } from '../models/timerTemplate'
import { AppStore } from './types'

export interface CurrentActivityTimerState extends AppStore {
	activityTimer: SimpleOrAdvancedTimer
	setActivityTimer: (timer: SimpleOrAdvancedTimer) => void
}

export const useCurrentActivityTimer = create<CurrentActivityTimerState>((set) => ({
	// state
	activityTimer: createDefaultTimer(),

	// updates
	setActivityTimer: (timer: SimpleOrAdvancedTimer) => set({ activityTimer: timer }),
}))
