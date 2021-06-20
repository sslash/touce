import _ from 'lodash'
import create from 'zustand'
import {
	isSimpleTimer,
	SimpleOrAdvancedTimer,
	TimerTemplate,
	TimerValue,
} from '../models/timerTemplate'
import { stateUpdater } from './helpers/imperativeApi'
import { useShiftMode } from './shiftMode'
import { AppStore } from './types'

export interface WorkoutTimerState extends AppStore {
	workoutStartedTimestampMillis: number
	restTimer: number
	liftTimer: number
	isRestTimerEnabled: boolean
	isLiftTimerEnabled: boolean
	hasWorkoutStarted: boolean
	isFreezed: boolean
	// secondTimestampOnFreeze?: number
	currentCountdownSeconds: number
	startWorkoutWithTimer: (timer: SimpleOrAdvancedTimer) => void
	runCountdownTimer: () => void
	handleForcedShift: (isLiftMode: boolean) => void
	toggleFreeze: () => void
	applyTimer: (timer: TimerValue, forMode: ShiftMode) => void
}

export const useWorkoutTimer = create<WorkoutTimerState>((set, get) => ({
	// state
	workoutStartedTimestampMillis: null,
	secondTimestampOnAppOpen: null,
	restTimer: null,
	liftTimer: null,
	isRestTimerEnabled: null,
	isLiftTimerEnabled: null,
	isFreezed: false,

	currentCountdownSeconds: null,

	hasWorkoutStarted: false,

	// updates
	startWorkoutWithTimer: (timer: SimpleOrAdvancedTimer) => {
		if (isSimpleTimer(timer)) {
			return set({
				restTimer: timer.rest.durationSeconds,
				isRestTimerEnabled: timer.rest.isOn,

				liftTimer: timer.lift.durationSeconds,
				isLiftTimerEnabled: timer.lift.isOn,

				currentCountdownSeconds: getLiftOrRestCountdown(timer),
				hasWorkoutStarted: true,
				workoutStartedTimestampMillis: Date.now(),
			})
		} else {
			// init advanced timer
		}
	},

	onAppLoop: (sessionDurationSeconds: number) => {
		get().runCountdownTimer()
	},

	runCountdownTimer: () => {
		set((state) => {
			if (!state.hasWorkoutStarted) {
				return state
			}

			if (state.isFreezed) {
				return state
			}

			const isLift = useShiftMode.getState().isLiftMode
			const isCountdown = isLift ? state.isLiftTimerEnabled : state.isRestTimerEnabled
			let nextCountdownVal = isCountdown ? state.currentCountdownSeconds - 1 : null
			const shouldShift = _.isNumber(nextCountdownVal) && nextCountdownVal <= 0

			if (shouldShift) {
				nextCountdownVal = isLift ? state.restTimer : state.liftTimer
				stateUpdater(useShiftMode, (s) => s.timeoutShift())
			}

			return {
				currentCountdownSeconds: nextCountdownVal,
			}
		})
	},

	handleForcedShift: (isLift: boolean) => {
		set((state) => {
			const isCountdown = isLift ? state.isLiftTimerEnabled : state.isRestTimerEnabled
			const countdownVal = isLift ? state.liftTimer : state.restTimer
			return {
				currentCountdownSeconds: isCountdown ? countdownVal : null,
			}
		})
	},

	toggleFreeze: () => {
		set(({ isFreezed }) => ({ isFreezed: !isFreezed }))
	},

	applyTimer: (timer: TimerValue, forMode: ShiftMode) => {
		return set((state) => {
			const newState =
				forMode === 'rest'
					? {
							restTimer: timer.durationSeconds,
							isRestTimerEnabled: timer.isOn,
					  }
					: {
							liftTimer: timer.durationSeconds,
							isLiftTimerEnabled: timer.isOn,
					  }

			return {
				...state,
				...newState,
				currentCountdownSeconds: getNextCountdown(state, timer, forMode),
			}
		})
	},
}))

//
// helpers
//

export function getCountdownProgress(
	state: WorkoutTimerState,
	isLifting: boolean
): number | undefined {
	if (isLifting && state.isLiftTimerEnabled) {
		return state.currentCountdownSeconds / state.liftTimer
	} else if (!isLifting && state.isRestTimerEnabled) {
		return state.currentCountdownSeconds / state.restTimer
	}
}

export function getWorkoutDuration(state: WorkoutTimerState): number {
	if (state.hasWorkoutStarted) {
		return Math.floor((Date.now() - state.workoutStartedTimestampMillis) / 1000)
	} else {
		return 0
	}
}

function getNextCountdown(oldState: WorkoutTimerState, timer: TimerValue, forMode: ShiftMode) {
	const isLiftMode = useShiftMode.getState().isLiftMode
	const isForModeNotCurrent =
		(isLiftMode && forMode === 'rest') || (!isLiftMode && forMode === 'lift')
	if (isForModeNotCurrent) {
		return oldState.currentCountdownSeconds
	}

	//
	// we are updating the current mode
	//

	if (!timer.isOn) {
		return null
	}

	const secsPassed = getSecondsPassed(oldState)
	return Math.max(timer.durationSeconds - secsPassed, 10)
}

function getLiftOrRestCountdown(timer: TimerTemplate): number | null {
	const liftCountdown = timer.lift.isOn ? timer.lift.durationSeconds : null
	const restCountdown = timer.rest.isOn ? timer.rest.durationSeconds : null
	return useShiftMode.getState().isLiftMode ? liftCountdown : restCountdown
}

function getSecondsPassed(state: WorkoutTimerState): number {
	if (useShiftMode.getState().isLiftMode) {
		return state.isLiftTimerEnabled ? state.liftTimer - state.currentCountdownSeconds : 0
	} else {
		return state.isRestTimerEnabled ? state.restTimer - state.currentCountdownSeconds : 0
	}
}
