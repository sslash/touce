import _ from 'lodash'
import React from 'react'
import Picker, { PickerValue, PickerVariant, PickerProps } from '../atoms/Picker'
import { timerPickerItems } from '../utils/timer'

interface Props {
	variant: PickerVariant
	setSelected: (v: PickerValue) => void
	selected: PickerValue
	items?: PickerProps['items']
}

const TimerPicker = ({
	items = timerPickerItems,
	variant,
	selected,
	setSelected,
}: Props): JSX.Element => {
	return (
		<Picker
			items={items}
			variant={variant}
			selectedValue={selected}
			onValueChange={(itemValue: number) => setSelected(itemValue)}
		/>
	)
}

export default TimerPicker
