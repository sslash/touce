import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import Card from '../../../../atoms/Card'
import Spacer from '../../../../atoms/Spacer'
import { useStrings } from '../../../../localization/localizedStrings'
import ExpandableIconRow from '../../../../molecules/iconRowAction/ExpandableIconRow'
import { RootStackParamList } from '../../../../navigation/types'
import { screenStyle } from '../constants'
import AudioCuesRow from './AudioCuesRow'
import PlaybackControlRow from './PlaybackControlRow'
import PauseWithTimerRow from './PauseWithTimerRow'
import VolumeRow from './VolumeRow'
import PodcastSpeedRow from './PodcastSpeedRow'
import BackgroundsRow from './BackgroundsRow'
import { useWorkoutState } from '../../../../store'
import RoundsCounter from './RoundsCounter'
import { cardSpace } from './constants'

const RestMenu = (): React.ReactElement => {
	const nav = useNavigation<StackNavigationProp<RootStackParamList, 'Workout'>>()
	const strings = useStrings().strings.workout.settings

	const onEmojiPress = () => {
		nav.navigate('EmojiSelector', {
			headerTitle: strings.emoji.restTitle,
			headerSubTitle: strings.emoji.restSubTitle,
			onSelect: (emoji) => useWorkoutState.getState().setRestEmoji(emoji),
		})
	}

	const props = {
		strings,
	}
	return (
		<View style={screenStyle}>
			<Card needsViewWrapping>
				<AudioCuesRow {...props} />
				<PlaybackControlRow {...props} />
				<PauseWithTimerRow {...props} isRest />
				<VolumeRow {...props} isRest />
				<PodcastSpeedRow {...props} isLast />
			</Card>
			<Spacer y={cardSpace} />

			<Card needsViewWrapping>
				<BackgroundsRow {...props} />
				<ExpandableIconRow icon="flash-outline" label="Rest emoji" onPress={onEmojiPress} />
				<RoundsCounter {...props} />
			</Card>
		</View>
	)
}

export default RestMenu
