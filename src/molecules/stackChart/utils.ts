import { StackItem } from './types'

export const highestValue = (items: StackItem[]): number => {
	let highest = 0
	items.forEach((item) => {
		if (item.value > highest) {
			highest = item.value
		}
	})

	return highest
}
