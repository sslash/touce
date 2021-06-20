import React from 'react'
import ActivityTimerNameScreen from '../screens/activityTimerName/ActivityTimerNameScreen'
import EditAdvancedTimerScreen from '../screens/advancedTimer/EditAdvancedTimerScreen'
import CuratedWorkoutScreen from '../screens/curatedWorkout/CuratedWorkoutScreen'
import EditTimerScreen from '../screens/editTimer/EditTimerScreen'
import HomeScreen from '../screens/home/HomeScreen'
import EmojiSelectorScreen from '../screens/emojiSelector/EmojiSelectorScreen'
import MusicScreen from '../screens/media/music/MusicScreen'
import MusicSearchScreen from '../screens/media/music/MusicSearchScreen'
import EpisodeListScreen from '../screens/media/podcast/EpisodeListScreen'
import PodcastChannelDetailsScreen from '../screens/media/podcast/PodcastChannelDetailsScreen'
import PodcastScreen from '../screens/media/podcast/PodcastScreen'
import PodcastSearchScreen from '../screens/media/podcast/PodcastSearchScreen'
import SetMusicSourceScreen from '../screens/musicSource/SetMusicSourceScreen'
import ActivityNameScreen from '../screens/onboarding/activityName/ActivityNameScreen'
import YourGoalScreen from '../screens/onboarding/goal/YourGoalScreen'
import HowToScreen from '../screens/onboarding/howTo/HowToScreen'
import RestConfigScreen from '../screens/onboarding/restConfig/RestConfigScreen'
import VibeScreen from '../screens/onboarding/vibe/VibeScreen'
import AuthCodeScreen from '../screens/signup/AuthCodeScreen'
import AuthEmailScreen from '../screens/signup/AuthEmailScreen'
import AuthScreen from '../screens/signup/AuthScreen'
import WebViewScreen from '../screens/WebViewScreen'
import WorkoutHistoryScreen from '../screens/WorkoutHistory/WorkoutHistoryScreen'
import {
	BackButton,
	MusicBackButton,
	MusicSearch,
	PodcastBackButton,
	PodcastSearch,
	pushTransparentBack,
} from './navComponents'
import { ScreenConfigProps } from './types'
import SettingsScreen from '../screens/settings/SettingsScreen'
import PaywallScreen from '../screens/paywall/PaywallScreen'
import AppTrackingScreen from '../screens/AppTrackingScreen'
import PodcastImportScreen from '../screens/importPodcasts/PodcastImportScreen'

export const SHARED_SCREENS: Record<string, ScreenConfigProps> = {
	YourVibe: { title: 'Your Vibe', component: VibeScreen },
	YourGoal: { title: 'Your Goal', component: YourGoalScreen },
	HowTo: { title: 'How to', component: HowToScreen },
	RestConfig: { title: 'Rest config', component: RestConfigScreen },
	ActivityName: { title: 'Activity name', component: ActivityNameScreen },
	Home: { title: 'Home', component: HomeScreen },
	Settings: { title: 'Home', component: SettingsScreen },
	Paywall: { title: 'Home', component: PaywallScreen },
	EmojiSelector: { title: 'Emoji selector', component: EmojiSelectorScreen },
	ActivityTimerName: { title: 'New timer', component: ActivityTimerNameScreen },
	EditTimer: {
		title: 'Edit timer',
		component: EditTimerScreen,
		options: pushTransparentBack,
	},
	EditAdvancedTimer: { title: 'Edit timer', component: EditAdvancedTimerScreen },
	Music: {
		title: 'Music',
		component: MusicScreen,
		options: (props) => ({
			headerLeft: () => <BackButton {...props} />,
			headerRight: () => <MusicSearch {...props} />,
			headerHideShadow: true,
			headerTitle: null,
		}),
	},
	MusicSearch: {
		title: 'Music search',
		component: MusicSearchScreen,
		options: (props) => ({
			headerLeft: () => <MusicBackButton {...props} />,
			headerHideShadow: true,
			headerTitle: null,
		}),
	},
	PodcastSearch: {
		title: 'Podcast search',
		component: PodcastSearchScreen,
		options: (props) => ({
			headerLeft: () => <PodcastBackButton {...props} />,
			headerHideShadow: true,
			headerTitle: null,
		}),
	},
	Podcasts: {
		title: 'Podcasts',
		component: PodcastScreen,
		options: (props) => ({
			headerLeft: () => <PodcastBackButton {...props} />,
			headerRight: () => <PodcastSearch {...props} />,
			headerHideShadow: true,
			headerTitle: null,
		}),
	},
	PodcastChannelDetails: {
		title: 'Podcast channel',
		component: PodcastChannelDetailsScreen,
		options: pushTransparentBack,
	},
	EpisodeList: { title: 'Episode list', component: EpisodeListScreen },
	SetMusicSource: { title: 'Set music source', component: SetMusicSourceScreen },
	CuratedWorkout: { title: 'Curated workout', component: CuratedWorkoutScreen },
	Auth: { title: 'Auth', component: AuthScreen },
	AuthEmail: { title: 'Auth email', component: AuthEmailScreen },
	AuthCode: { title: 'Auth code', component: AuthCodeScreen },
	WorkoutHistory: { title: 'Workout history', component: WorkoutHistoryScreen },
	AppTracking: { title: 'Workout history', component: AppTrackingScreen },
	WebView: {
		title: 'Web view',
		component: WebViewScreen,
		options: (props) => ({
			headerLeft: () => <BackButton {...props} />,
			headerHideShadow: true,
			headerTitle: null,
		}),
	},
	PodcastImport: { title: 'Workout history', component: PodcastImportScreen },
}
