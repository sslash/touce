import React from 'react'
import { StyleSheet } from 'react-native'
import Bg from '../../../atoms/Bg'
import { useStrings } from '../../../localization/localizedStrings'
import { Strings } from '../../../localization/types'
import TabView from '../../../molecules/TabView/TabView'
import { useWorkoutState } from '../../../store/workoutState'
import { mainHorizontalMargin, screenWidth, spaceUnderTransparentNav } from '../../../theme/metrics'
import MusicDiscoverScreen from './MusicDiscoverScreen'
import MusicNowPlayingScreen from './MusicNowPlayingScreen'
import MusicPlaylistsScreen from './MusicPlaylistsScreen'
import PowerSongsScreen from './PowerSongsScreen'

interface Props {}

type MediaStrings = Strings['podcastsAndMusic']
const allScenes = {
	nowPlaying: (s: MediaStrings) => ({
		title: s.nowPlaying,
		key: 'now-playing',
		Component: MusicNowPlayingScreen,
	}),
	discover: (s: MediaStrings) => ({
		title: s.discover,
		key: 'discover',
		Component: MusicDiscoverScreen,
	}),
	playlists: (s: MediaStrings) => ({
		title: s.playlists,
		key: 'playlists',
		Component: MusicPlaylistsScreen,
	}),
	powerSongs: (s: MediaStrings) => ({
		title: s.powerSongs,
		key: 'powerSongs',
		Component: PowerSongsScreen,
	}),
}

const MusicScreen: React.FC<Props> = () => {
	const isWorkingOut = useWorkoutState((s) => s.isWorkingOut)
	const {
		strings: { podcastsAndMusic: strings },
	} = useStrings()

	const scenes = isWorkingOut
		? [allScenes.nowPlaying(strings), allScenes.discover(strings), allScenes.playlists(strings)]
		: [allScenes.discover(strings), allScenes.playlists(strings), allScenes.powerSongs(strings)]

	return (
		<Bg bg="background" style={styles.wrapper}>
			<TabView
				{...{ scenes }}
				headerVariant={'level2'}
				tabsStyle={styles.tabs}
				headerSpacing={12} // cant be more because shinyImage needs padding for shadow
			/>
		</Bg>
	)
}

const styles = StyleSheet.create({
	tabs: {
		marginHorizontal: mainHorizontalMargin,
	},
	wrapper: { flex: 1, width: screenWidth, paddingTop: spaceUnderTransparentNav },
})

export default MusicScreen
