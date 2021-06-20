import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useState } from 'react'
import { LayoutAnimation } from 'react-native'
import withRenderAfterInteraction from '../../../hocs/withRenderAfterInteraction'
import { useStrings } from '../../../localization/localizedStrings'
import { ChannelFromApi } from '../../../models/podcasts'
import MediaList from '../../../molecules/mediaList/MediaList'
import { State } from '../../../molecules/mediaList/types'
import { RootStackParamList } from '../../../navigation/types'
import { useFollowedPodcastChannels } from '../../../store/media/followedPodcastChannels'
import { contentStyle } from '../constants'
import EditButton from './components/EditButton'
import EmptyPodcastScreen from './EmptyPodcastScreen'

const PodcastChannelsScreen = (): JSX.Element => {
	const [isEditMode, setIsEditMode] = useState(false)
	const strings = useStrings().strings.podcastsAndMusic
	const { channels, toggleFollowChannel } = useFollowedPodcastChannels()
	const nav = useNavigation<StackNavigationProp<RootStackParamList, 'Podcasts'>>()

	const onSetEditMode = () => {
		LayoutAnimation.easeInEaseOut()
		setIsEditMode((edit) => !edit)
	}

	const mapItem = useCallback(
		(channel: ChannelFromApi) => {
			const state = isEditMode ? State.Deletable : State.NA

			const onPress = () => {
				if (isEditMode) {
					LayoutAnimation.easeInEaseOut()
					toggleFollowChannel(channel)
				} else {
					nav.navigate('PodcastChannelDetails', { channel })
				}
			}

			return {
				onPress,
				state,
				title: channel.title,
				subTitle: channel.publisherName,
				accessibilityLabel: channel.title,
				image: channel.imageUri,
				uri: channel.podcastUri,
			}
		},
		[isEditMode]
	)

	if (channels.length) {
		return (
			<MediaList
				style={contentStyle}
				ListHeaderComponent={<EditButton {...{ strings, isEditMode, onSetEditMode }} />}
				data={channels.map(mapItem)}
				showFooter
			/>
		)
	} else {
		return <EmptyPodcastScreen />
	}
}

export default withRenderAfterInteraction(PodcastChannelsScreen)
