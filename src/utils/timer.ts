import _ from 'lodash'
import { PickerData } from '../atoms/Picker'
import { padLeft, secsToColonParts } from './time'

export const timerPickerItems = _.range(1, 13)
	.map((i) => i * 30)
	.map(numToPickerValue)

export const minsList = _.range(0, 60).map(numToPadLeftPickerValue)
export const secsList = _.range(0, 60, 5).map(numToPadLeftPickerValue)

function numToPickerValue(i: number) {
	return {
		label: secsToColonParts(i),
		value: i,
	}
}

function numToPadLeftPickerValue(i: number): PickerData {
	return {
		value: i,
		label: padLeft(i),
	}
}

export const secondsToMinsAndSecs = (
	secondsTotal: number
): { minutes: number; seconds: number } => {
	const minutes = Math.floor(secondsTotal / 60)
	const seconds = secondsTotal % 60
	return { minutes, seconds }
}
