import {
	NativeStackNavigationOptions,
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from 'react-native-screens/lib/typescript/native-stack'
import { ChannelFromApi } from '../models/podcasts'
import { DialogOpenProps } from '../screens/bottomSheetDialog/types'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
	Home: undefined
	Settings: undefined
	YourGoal: undefined
	NotFound: undefined
	YourVibe: undefined
	HowTo: undefined
	RestConfig: undefined
	ActivityName: undefined
	Paywall: {
		redirectScreen?: GlobalRedirectScreen
	}
	Workout: undefined
	PodcastAndMusic: {
		isRest: boolean
		sharedImageId: string
	}
	EpisodeList: {
		sourceId: string
	}
	EmojiSelector: {
		headerTitle: string
		headerSubTitle: string
		onSelect: (emoji: string) => void
	}
	ActivityTimerName: undefined
	EditTimer: { id: string }
	EditAdvancedTimer: undefined
	Music: undefined
	MusicSearch: undefined
	Podcasts: undefined
	SetMusicSource: undefined
	PodcastSearch: undefined
	PodcastChannelDetails: {
		channel: ChannelFromApi
	}
	CuratedWorkout: {
		curatedWorkoutId: number
	}
	Auth: {
		redirectScreen?: GlobalRedirectScreen
	}
	AuthEmail: {
		isSignup: boolean
		redirectScreen?: GlobalRedirectScreen
	}
	AuthCode: {
		isSignup: boolean
		redirectScreen?: GlobalRedirectScreen
		email: string
	}
	WorkoutHistory: undefined
	WebView: {
		uri: string
	}
	AppTracking: undefined
	PodcastImport: undefined
	BottomSheetDialog: DialogOpenProps<unknown>
}

export type GlobalRedirectScreen = keyof AllScreenParams
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type WorkoutStackParamList = {
	Workout: undefined
	PodcastAndMusic: undefined
	WorkoutFinished: undefined
}

export type AllScreenParams = WorkoutStackParamList & RootStackParamList

export interface ScreenConfigProps {
	title: string
	component: React.ComponentType<Screen>
	options?: NativeStackNavigationOptions | OptionsCallback
}

export type OptionsCallback = (
	args: NativeStackScreenProps<RootStackParamList>
) => NativeStackNavigationOptions

interface Screen {
	navigation: NativeStackNavigationProp<RootStackParamList>
}
