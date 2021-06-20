import React, { useState } from 'react'
import Spacer from '../../../../atoms/Spacer'
import SwitchSettingRow from '../../../../molecules/settings/SwitchSettingRow'
import SlidableProgress from '../../../../molecules/SlidableProgress/SlidableProgress'
import { secsToColonParts } from '../../../../utils/time'
import SettingRowWrapper from './SettingRowWrapper'
import { RowType } from './types'

const AudioCuesRow = ({ strings }: RowType): React.ReactElement => {
	const [position, setPosition] = useState(0)
	const [isBeepOn, toggleBeep] = useState(true)
	const [isMinuteAlertOn, toggleMinuteAlert] = useState(true)
	const maxBeep = 60 * 5
	const beep = maxBeep * position
	const beepString = secsToColonParts(beep)

	return (
		<SettingRowWrapper icon="notifications-outline" label={strings.audioCues}>
			<SwitchSettingRow
				heading="Minute alerts"
				body="Plays an alert every minute"
				isOn={isMinuteAlertOn}
				onToggle={toggleMinuteAlert}
			/>
			<Spacer y={16} />
			<SwitchSettingRow
				heading="Timer beep"
				body={`Plays a beep at: ${beepString}`}
				isOn={isBeepOn}
				onToggle={toggleBeep}
			/>
			<Spacer y={8} />
			{isBeepOn && (
				<SlidableProgress
					initialPosition={0}
					onSlideEnd={setPosition}
					onDrag={setPosition}
					dotSize="large"
					width="100%"
				/>
			)}
		</SettingRowWrapper>
	)
}

export default AudioCuesRow
