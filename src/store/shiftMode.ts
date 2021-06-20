import create from 'zustand'
import { useWorkoutTimer } from '.'
import { stateUpdater } from './helpers/imperativeApi'
import { AppStore } from './types'

interface ShiftModeState extends AppStore {
	isLiftMode: boolean
	timeoutShift: () => void
	forcedShift: () => void
}

export const useShiftMode = create<ShiftModeState>((set) => ({
	isLiftMode: false,

	timeoutShift: () => {
		set((state) => ({
			isLiftMode: !state.isLiftMode,
		}))
	},

	forcedShift: () => {
		set((state) => {
			const nextLiftMode = !state.isLiftMode
			stateUpdater(useWorkoutTimer, (s) => s.handleForcedShift(nextLiftMode))
			return {
				isLiftMode: nextLiftMode,
			}
		})
	},
}))
