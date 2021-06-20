import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { useStrings } from '../../localization/localizedStrings'
import Screen from '../../molecules/screen/Screen'
import TabView from '../../molecules/TabView/TabView'
import { RootStackParamList } from '../../navigation/types'
import { mainHorizontalMargin } from '../../theme/metrics'
import MusicScreen from './music/MusicScreen'
import PodcastScreen from './podcast/PodcastScreen'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'PodcastAndMusic'>
	route: RouteProp<RootStackParamList, 'PodcastAndMusic'>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PodcastAndMusicScreen = (props: Props): JSX.Element => {
	const { strings } = useStrings()
	const initialIndex = props.route.params?.isRest ? 0 : 1

	const scenes = [
		{ title: strings.navigation.podcasts, key: 'podcasts', Component: PodcastScreen },
		{ title: strings.navigation.music, key: 'music', Component: MusicScreen },
	]

	return (
		<Screen preset="fixed" unsafe>
			<TabView
				{...{ scenes, initialIndex }}
				isFixed
				headerVariant="level1"
				tabsStyle={styles.tabs}
				headerSpacing={5}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	tabs: {
		paddingTop: 4,
		paddingHorizontal: mainHorizontalMargin,
	},
})

export default PodcastAndMusicScreen
