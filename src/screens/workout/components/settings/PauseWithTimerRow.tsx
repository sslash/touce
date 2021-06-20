import React, { useState } from 'react'
import SwitchSettingRow from '../../../../molecules/settings/SwitchSettingRow'
import SettingRowWrapper from './SettingRowWrapper'
import { RowType } from './types'

const PauseWithTimerRow = ({ strings, isLast, isRest }: RowType): React.ReactElement => {
	const [isOn, onToggle] = useState(false)
	const label = isRest ? strings.pauseWithTimerRest : strings.pauseWithTimerLift

	return (
		<SettingRowWrapper icon="pause-outline" label={label} isLast={isLast}>
			<SwitchSettingRow body={strings.pauseWithTimerText} {...{ isOn, onToggle }} />
		</SettingRowWrapper>
	)
}

export default PauseWithTimerRow
