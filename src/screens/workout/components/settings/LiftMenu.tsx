import React from 'react'
import { View } from 'react-native'
import Card from '../../../../atoms/Card'
import Spacer from '../../../../atoms/Spacer'
import { useStrings } from '../../../../localization/localizedStrings'
import ExpandableIconRow from '../../../../molecules/iconRowAction/ExpandableIconRow'
import { screenStyle } from '../constants'
import AudioCuesRow from './AudioCuesRow'
import BackgroundsRow from './BackgroundsRow'
import { cardSpace } from './constants'
import PauseWithTimerRow from './PauseWithTimerRow'
import RoundsCounter from './RoundsCounter'
import VolumeRow from './VolumeRow'

const LiftMenu = (): React.ReactElement => {
	const props = {
		strings: useStrings().strings.workout.settings,
	}

	return (
		<View style={screenStyle}>
			<Card needsViewWrapping>
				<AudioCuesRow {...props} />
				<VolumeRow {...props} isRest={false} />
				<PauseWithTimerRow {...props} isRest={false} isLast />
			</Card>

			<Spacer y={cardSpace} />

			<Card needsViewWrapping>
				<BackgroundsRow {...props} />
				<ExpandableIconRow icon="flash-outline" label="Work emoji" />
				<RoundsCounter {...props} />
			</Card>
		</View>
	)
}

export default LiftMenu
