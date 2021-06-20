import _ from 'lodash'

interface CommonTimerProps {
	id: string
}
export interface TimerTemplate extends CommonTimerProps {
	rest: TimerValue
	lift: TimerValue
}

export interface AdvancedTimer extends CommonTimerProps {
	rounds: TimerTemplate[]
}

export interface TimerValue {
	durationSeconds: number
	isOn: boolean
}

export type SimpleOrAdvancedTimer = AdvancedTimer | TimerTemplate

export function isAdvancedTimer(timer: AdvancedTimer | TimerTemplate): timer is AdvancedTimer {
	return timer.hasOwnProperty('rounds')
}

export function isSimpleTimer(timer: AdvancedTimer | TimerTemplate): timer is TimerTemplate {
	return timer.hasOwnProperty('rest') && timer.hasOwnProperty('lift')
}
//
// helpers
//
export const createDefaultTimer = (): TimerTemplate => ({
	id: _.uniqueId(),
	rest: {
		durationSeconds: 90,
		isOn: true,
	},
	lift: {
		durationSeconds: 30,
		isOn: true,
	},
})
