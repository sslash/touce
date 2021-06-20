import React from 'react'
import Picker, { PickerVariant } from '../atoms/Picker'
import Row from '../atoms/Row'
import Caption from '../atoms/texts/Caption'
import V from '../atoms/V'
import { MinsAndSecsTimerData } from '../hooks/useMinsAndSecsTimerData'
import { minsList, secsList } from '../utils/timer'

const SecsAndMinsTimerPicker = ({
	selectedMins,
	selectedSecs,
	setSelectedMins,
	setSelectedSecs,
	enabled,
}: Omit<MinsAndSecsTimerData, 'totalSeconds'> & { enabled?: boolean }): React.ReactElement => {
	return (
		<Row ai="center" jc="center">
			<V ai="center">
				<Caption fw="DemiBold" color="primaryText">
					MINS
				</Caption>
				<Picker
					enabled={enabled}
					items={minsList}
					variant={PickerVariant.Small}
					selectedValue={selectedMins}
					onValueChange={setSelectedMins}
				/>
			</V>

			<V ai="center">
				<Caption fw="DemiBold" color="primaryText">
					SECS
				</Caption>

				<Picker
					items={secsList}
					enabled={enabled}
					variant={PickerVariant.Small}
					selectedValue={selectedSecs}
					onValueChange={setSelectedSecs}
				/>
			</V>
		</Row>
	)
}

export default SecsAndMinsTimerPicker
