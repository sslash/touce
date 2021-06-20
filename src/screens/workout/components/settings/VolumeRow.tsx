import React, { useState } from 'react'
import SlidableProgress from '../../../../molecules/SlidableProgress/SlidableProgress'
import SettingRowWrapper from './SettingRowWrapper'
import { RowType } from './types'

const VolumeRow = ({ strings, isRest }: RowType): React.ReactElement => {
	const [_, setPosition] = useState(0)

	return (
		<SettingRowWrapper
			icon="volume-medium-outline"
			label={isRest ? strings.restVolume : strings.liftVolume}
		>
			<SlidableProgress
				initialPosition={0}
				onSlideEnd={setPosition}
				onDrag={setPosition}
				dotSize="large"
				width="100%"
			/>
		</SettingRowWrapper>
	)
}

export default VolumeRow
