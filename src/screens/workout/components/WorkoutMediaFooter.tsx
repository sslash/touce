import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import ScalingTapView from '../../../atoms/ScalingTapView'
import { Icon } from '../../../icons'
import RestForward from '../../../icons/RestForward'
import MediaFooter from '../../../molecules/mediaFooter/MediaFooter'
import { RootStackParamList } from '../../../navigation/types'
import { useCurrentPodcastEpisode, useShiftMode } from '../../../store'
import { createImageId } from '../../../utils/sharedElement'
import MediaPlayPauseIcon from './MediaPlayPauseIcon'

interface Props {
	onPress: (sharedImageId: string) => void
}
const MusicMediaFooter = ({ onPress }: Props): JSX.Element => {
	const musicItem = {
		title: 'Not Your Muse (Deluxe)',
		subTitle: 'Celeste',
		imageUri: 'https://i.scdn.co/image/ab67616d0000b273a724f0a2c23fdc0ef98201b8',
	}

	const sharedImageId = createImageId(musicItem.imageUri)

	const _onPress = () => onPress(sharedImageId)

	return (
		<ScalingTapView onPress={_onPress}>
			<MediaFooter
				title={musicItem.title}
				subTitle={musicItem.subTitle}
				PlayPauseIcon={MediaPlayPauseIcon}
				SkipIcon={({ fill }) => <Icon icon="play-skip-forward-outline" fill={fill} />}
				image={musicItem.imageUri}
				isLiftMode
				sharedElementId={sharedImageId}
			/>
		</ScalingTapView>
	)
}

const PodcastMediaFooter = ({ onPress }: Props): JSX.Element => {
	const { episode } = useCurrentPodcastEpisode()
	const sharedImageId = createImageId(episode.imageUri)

	const _onPress = () => onPress(sharedImageId)

	return (
		<ScalingTapView onPress={_onPress}>
			<MediaFooter
				title={episode.channelTitle}
				subTitle={episode.title}
				PlayPauseIcon={MediaPlayPauseIcon}
				SkipIcon={RestForward}
				image={episode.imageUri}
				isLiftMode={false}
				sharedElementId={sharedImageId}
			/>
		</ScalingTapView>
	)
}

export default (): React.ReactElement => {
	const isLiftMode = useShiftMode().isLiftMode
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Workout'>>()

	const props = {
		onPress: (sharedImageId: string) => {
			navigation.push('PodcastAndMusic', { isRest: !isLiftMode, sharedImageId })
		},
	}

	return isLiftMode ? <MusicMediaFooter {...props} /> : <PodcastMediaFooter {...props} />
}
