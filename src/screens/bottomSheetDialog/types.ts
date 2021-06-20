import { DialogVariant } from './constants'

export interface DialogChildProps {
	/**
	 * manually slide down the bottom sheet,
	 * to be called from inside dialog components.
	 */
	hideDialog: () => void
}

export interface DialogOpenProps<T> {
	variant: DialogVariant
	height?: number
	props?: T
}
