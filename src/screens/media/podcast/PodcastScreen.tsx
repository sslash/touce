import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import Bg from '../../../atoms/Bg'
import { useStrings } from '../../../localization/localizedStrings'
import { Strings } from '../../../localization/types'
import TabView from '../../../molecules/TabView/TabView'
import { useWorkoutState } from '../../../store/workoutState'
import { mainHorizontalMargin, screenWidth, spaceUnderTransparentNav } from '../../../theme/metrics'
import { headerSpacing } from '../constants'
import PodcastNowPlayingScreen from './PodcastNowPlayingScreen'
import PodcastDiscoverScreen from './PodcastDiscoverScreen'
import PodcastQueueScreen from './PodcastQueueScreen'
import PodcastChannelsScreen from './PodcastChannelsScreen'

type MediaStrings = Strings['podcastsAndMusic']

const allScenes = {
	nowPlaying: (s: MediaStrings) => ({
		title: s.nowPlaying,
		key: 'now-playing',
		Component: memo(PodcastNowPlayingScreen),
	}),
	queue: (s: MediaStrings) => ({
		title: s.queue,
		key: 'queue',
		Component: memo(PodcastQueueScreen),
	}),
	discover: (s: MediaStrings) => ({
		title: s.discover,
		key: 'discover',
		Component: memo(PodcastDiscoverScreen),
	}),
	channels: (s: MediaStrings) => ({
		title: s.channels,
		key: 'channels',
		Component: memo(PodcastChannelsScreen),
	}),
}

const PodcastScreen = (): JSX.Element => {
	const isWorkingOut = useWorkoutState((s) => s.isWorkingOut)

	const {
		strings: { podcastsAndMusic: strings },
	} = useStrings()

	const scenes = isWorkingOut
		? [
				allScenes.nowPlaying(strings),
				allScenes.queue(strings),
				allScenes.discover(strings),
				allScenes.channels(strings),
		  ]
		: [allScenes.queue(strings), allScenes.channels(strings), allScenes.discover(strings)]

	return (
		<Bg bg="background" style={styles.container}>
			<TabView
				isFixed
				headerVariant={'level2'}
				tabsStyle={styles.tabs}
				{...{ scenes, headerSpacing }}
			/>
		</Bg>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, width: screenWidth, paddingTop: spaceUnderTransparentNav },
	tabs: {
		marginHorizontal: mainHorizontalMargin,
	},
})

export default PodcastScreen
