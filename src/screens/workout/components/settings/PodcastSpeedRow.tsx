import React, { useState } from 'react'
import RadioGroup from '../../../../atoms/radioInput/RadioGroup'
import { spaceScale } from '../../../../theme/spacing'
import SettingRowWrapper from './SettingRowWrapper'
import { RowType } from './types'

const PodcastSpeedRow = ({ strings, isLast }: RowType): React.ReactElement => {
	const [selected, setSelected] = useState(0)

	const radioItems = ['1x', '1.5x', '2x', '3x', '4x']
	return (
		<SettingRowWrapper icon="speedometer-outline" label={strings.podcastSpeed} isLast={isLast}>
			<RadioGroup
				items={radioItems}
				selectedIndex={selected}
				onSelectItem={setSelected}
				isVertical={false}
				spacing={spaceScale[3]}
			/>
		</SettingRowWrapper>
	)
}

export default PodcastSpeedRow
