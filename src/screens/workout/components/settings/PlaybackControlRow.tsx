import React, { useState } from 'react'
import RadioGroup from '../../../../atoms/radioInput/RadioGroup'
import Caption from '../../../../atoms/texts/Caption'
import { Icon } from '../../../../icons'
import SettingRowWrapper from './SettingRowWrapper'
import { RowType } from './types'

const iconData = {
	seconds: 15,
	secondsBg: 'primary20' as const,
}

const PlaybackControlRow = ({ strings }: RowType): React.ReactElement => {
	const [selected, setSelected] = useState(0)

	const radioItems = [
		<Icon icon="RestBackwards" key="back" fill="secundaryText" extraData={iconData} />,
		<Icon icon="RestForward" key="forward" fill="secundaryText" extraData={iconData} />,
	]
	return (
		<SettingRowWrapper icon="repeat-outline" label={strings.playbackControlLabel}>
			<Caption mb={4} color="secundaryText" fw="DemiBold">
				{strings.playbackControl}
			</Caption>
			<RadioGroup
				items={radioItems}
				selectedIndex={selected}
				onSelectItem={setSelected}
				isVertical={false}
			/>
		</SettingRowWrapper>
	)
}

export default PlaybackControlRow
