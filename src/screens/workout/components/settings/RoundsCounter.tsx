import React, { useState } from 'react'
import SwitchSettingRow from '../../../../molecules/settings/SwitchSettingRow'
import SettingRowWrapper from './SettingRowWrapper'
import { RowType } from './types'

const RoundsCounter = ({ strings }: RowType): React.ReactElement => {
	const [isOn, onToggle] = useState(false)
	return (
		<SettingRowWrapper icon="add-circle-outline" label={strings.counterLabel} isLast>
			<SwitchSettingRow body={strings.counter} {...{ isOn, onToggle }} />
		</SettingRowWrapper>
	)
}

export default RoundsCounter
