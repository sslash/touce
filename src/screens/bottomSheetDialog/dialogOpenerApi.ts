import { globalNavigate } from '../../navigation/globalNav'
import { DialogVariant } from './constants'

export function openDialog<T>(variant: DialogVariant, props?: T): Promise<void> {
	let dialogProps

	switch (variant) {
		case DialogVariant.WorkoutTimer:
			dialogProps = {
				variant,
				height: 570,
			}
			break

		default:
			break
	}

	if (dialogProps) {
		return globalNavigate('BottomSheetDialog', { ...dialogProps, ...props })
	}
}
