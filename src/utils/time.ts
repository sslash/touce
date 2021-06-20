/* eslint-disable no-bitwise */
// Outputs "1:01" or "4:03:59" or "123:03:59"
export const secsToColonParts = (seconds: number): string => {
	// Hours, minutes and seconds
	const { hrs, mins, secs } = toTimeBits(seconds)

	// Output like "1:01" or "4:03:59" or "123:03:59"
	let ret = ''

	if (hrs > 0) {
		ret += `${hrs}:${mins < 10 ? '0' : ''}`
	}

	ret += `${mins}:${secs < 10 ? '0' : ''}`
	ret += secs
	return ret
}

export const secsToShortTexts = (seconds: number): string => {
	if (seconds >= 60) {
		const min = ~~((seconds % 3600) / 60)
		const sec = ~~seconds % 60

		if (!sec) {
			return `${min}m`
		}

		return `${min}m ${sec}s`

		// below 60
	} else {
		return `${seconds}s`
	}
}

const emptyDurationStrings = ['00:00', '00:00:00']
export const formatDuration = (duration: string = ''): string => {
	if (emptyDurationStrings.includes(duration)) {
		return ''
	}

	const isAlreadyValid = duration.includes(':')
	if (isAlreadyValid) {
		return duration
	} else {
		return secsToColonParts(+duration)
	}
}

const toTimeBits = (time: number) => {
	// copied from https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
	const hrs = ~~(time / 3600)
	const mins = ~~((time % 3600) / 60)
	const secs = ~~time % 60

	return { hrs, mins, secs }
}

export const padLeft = (num: number | string): string => {
	if (`${num}`.length < 2) {
		return `0${num}`
	} else {
		return `${num}`
	}
}
