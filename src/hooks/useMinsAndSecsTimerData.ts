import { useState } from 'react'
import { PickerData } from '../atoms/Picker'
import { useWorkoutTimer } from '../store'
import { minsList, secondsToMinsAndSecs, secsList } from '../utils/timer'

export interface MinsAndSecsTimerData {
	selectedMins: number
	selectedSecs: number
	totalSeconds: number
	minsList: PickerData[]
	secsList: PickerData[]
	isOn: boolean
	setSelectedMins: (mins: number) => void
	setSelectedSecs: (secs: number) => void
	toggle: (isOn: boolean) => void
	persistToWorkoutTimer: () => void
}

interface Props {
	shiftMode: ShiftMode
	defaultSeconds?: number
	defaultIsOn?: boolean
}

export const useMinsAndSecsTimerData = ({
	shiftMode,
	defaultSeconds = 150,
	defaultIsOn = true,
}: Props): MinsAndSecsTimerData => {
	const { minutes, seconds } = secondsToMinsAndSecs(defaultSeconds)
	const [selectedMins, setSelectedMins] = useState<number>(minutes)
	const [selectedSecs, setSelectedSecs] = useState<number>(seconds)
	const [isOn, toggle] = useState<boolean>(defaultIsOn)
	const totalSeconds = selectedMins * 60 + selectedSecs

	const persistToWorkoutTimer = () => {
		const workoutTimerState = useWorkoutTimer.getState()
		const timer = {
			durationSeconds: totalSeconds,
			isOn,
		}

		workoutTimerState.applyTimer(timer, shiftMode)
	}

	return {
		selectedMins,
		selectedSecs,
		setSelectedMins,
		setSelectedSecs,
		totalSeconds,
		minsList,
		secsList,
		isOn,
		toggle,
		persistToWorkoutTimer,
	}
}
