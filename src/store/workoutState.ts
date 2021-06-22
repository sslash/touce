import create from 'zustand'
import { AppStore } from './types'

interface WorkoutState extends AppStore {
	isWorkingOut: boolean
	restEmoji?: string
	liftEmoji?: string

	startWorkout: () => void
	endWorkout: () => void
	setRestEmoji: (emoji: string) => void
	setLiftEmoji: (emoji: string) => void
}

export const useWorkoutState = create<WorkoutState>((set) => ({
	isWorkingOut: false,
	isFreezed: false,
	restEmoji: undefined,
	liftEmoji: undefined,

	startWorkout: () => set({ isWorkingOut: true }),
	endWorkout: () => set({ isWorkingOut: false }),
	setRestEmoji: (restEmoji: string) => set({ restEmoji }),
	setLiftEmoji: (liftEmoji: string) => set({ liftEmoji }),
}))
