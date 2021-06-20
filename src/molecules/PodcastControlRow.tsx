import React from 'react'
import { View } from 'react-native'
import Body from '../atoms/texts/Body'
import { Icon } from '../icons'
import { sharedStyle } from './constants'

interface Props {
	speed: number
	onSpeed: () => void
	onRewind: () => void
	onForward: () => void
	onTogglePlay: () => void
	onShare: () => void
	isPaused: boolean
}

const fill = 'primaryText'

const PodcastControlRow = ({
	speed,
	onSpeed,
	onRewind,
	onForward,
	onTogglePlay,
	onShare,
	isPaused,
}: Props): JSX.Element => {
	const playPauseIcon = isPaused ? 'play-circle' : 'pause-circle'

	return (
		<View style={sharedStyle.playbackControl}>
			<Body fw="DemiBold" color={fill} onPress={onSpeed}>
				{speed}x
			</Body>
			<Icon icon="reload-outline" fill={fill} flip onPress={onRewind} />

			<Icon icon={playPauseIcon} fill={fill} scale={2.5} onPress={onForward} />

			<Icon icon="reload-outline" fill={fill} onPress={onTogglePlay} />

			<Icon icon="share-outline" fill={fill} scale={0.8} onPress={onShare} />
		</View>
	)
}

export default PodcastControlRow
