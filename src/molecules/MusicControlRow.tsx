import React from 'react'
import { View } from 'react-native'
import { Icon } from '../icons'
import { sharedStyle } from './constants'

interface Props {
	onShuffle: () => void
	onPrevious: () => void
	onNext: () => void
	onTogglePlay: () => void
	onShare: () => void
	isPaused: boolean
}

const fill = 'primaryText'

// is playing state
const MusicControlRow = ({
	onShuffle,
	onPrevious,
	onNext,
	onTogglePlay,
	onShare,
	isPaused,
}: Props): JSX.Element => {
	const playPauseIcon = isPaused ? 'play-circle' : 'pause-circle'

	return (
		<View style={sharedStyle.playbackControl}>
			<Icon icon="shuffle-outline" fill={fill} scale={0.8} onPress={onShuffle} />

			<Icon icon="play-skip-back-outline" fill={fill} onPress={onPrevious} />

			<Icon icon={playPauseIcon} fill={fill} scale={2.5} onPress={onTogglePlay} />

			<Icon icon="play-skip-forward-outline" fill={fill} onPress={onNext} />

			<Icon icon="share-outline" fill={fill} scale={0.8} onPress={onShare} />
		</View>
	)
}

export default MusicControlRow
