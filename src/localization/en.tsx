/* eslint-disable react-native/no-raw-text */
import React from 'react'
import { Text } from 'react-native'
import Body from '../atoms/texts/Body'
import Caption2 from '../atoms/texts/Caption2'
import Lead from '../atoms/texts/Lead'
import Secundary from '../atoms/texts/Secundary'
import { TProps } from '../atoms/texts/T'
import { Theme } from '../theme/themeContext'
import { ColorTypes } from '../theme/types'
import { secsToColonParts } from '../utils/time'
import {
	PaywallHeadingProps,
	ProductStringsArgs,
	ProductStringsReturnType,
	RenewProps,
	TAndCProps,
} from './sharedTypes'

const en = {
	navigation: {
		music: 'Music',
		podcasts: 'Podcasts',
		continue: 'Continue',
		save: 'Save',
		screenFooter: 'Laget med ❤️ i Oslo',
	},
	general: {
		showMore: 'Show more',
		save: 'Save',
	},
	timer: {
		turnOffTimer: 'Skru av timeren',
		restTimer: 'For how long should the podcast play before we shift to music?',
		liftTimer: 'For how long should music play before we shift to the podcast?',
		disasbled: 'The timer is disabled.',
	},
	errors: {
		general: 'Oh no, something went wrong! Please, try again later.',
		network: `Connection issues! Please make sure you are online 📡`,
	},
	rating: {
		preHeader: 'Feedback',
		heading: 'Are you enjoying Shift?',
		body: 'We would love to get your opinion! It really helps us to improve Shift.',
		primaryLabel: `It's great 👍`,
		secundaryLabel: `Not great 👎`,
	},
	home: {
		startWorkout: 'Start Workout',
	},
	onboarding: {
		hi: 'Hi 👋',
		vibe: `What's your vibe?`,
		continue: 'Continue',
		howTo: {
			lift: 'Lift to music',
			liftSubtitle: 'Get your favorite jams while smashing weights!',
			rest: 'Rest to podcasts',
			restSubtitle: 'Get your favorite jams while smashing weights!',
			getStarted: 'Get Started',
		},
		activities: {
			cardio: {
				title: 'Running/Cycling/Rowing',
				subTitle: 'Conditioning',
			},
			strength: {
				title: 'Weights/Bodybuilding',
				subTitle: 'Strength',
			},
			hiit: {
				title: 'Hiit',
				subTitle: 'Endurance',
			},
			mobility: {
				title: 'Stretching/Yoga',
				subTitle: 'Mobility',
			},
			other: {
				title: 'Other',
				subTitle: 'Pilates/Boxing/etc',
			},
		},
		terms: (color: ColorTypes): JSX.Element => (
			<Text>
				By continuing you agree to our{' '}
				<Caption2 fw="Bold" {...{ color }}>
					Terms Of Service
				</Caption2>{' '}
				and{' '}
				<Caption2 fw="Bold" {...{ color }}>
					privacy policy
				</Caption2>
			</Text>
		),
		restConfig: {
			title1: 'For how long do you\n',
			title2: 'rest between sets?',
			time: (secs: number): string => `${secsToColonParts(secs)} minutes`,
		},
		activityName: {
			title: 'What’s the name of your activity?',
		},
		goals: {
			entertainment: {
				title: 'Entertainmnet',
				subTitle: 'Listen to entertaining podcasts during my workouts',
			},
			learning: {
				title: 'Learning',
				subTitle: 'Learn stuff while training to educational podcasts',
			},
			rest: {
				title: 'Rest control',
				subTitle: 'Better recovery control during my workouts.',
			},
		},
	},
	workout: {
		restMode: 'Podcast mode',
		music: 'Music',
		duration: 'Duration',
		finish: 'Finish',
		podcasts: 'Podcasts',
		timerPaused: {
			title: 'Timer paused',
			text:
				'You usually pause the timer when you clean up your equiptment, or just need a longer break.',
		},
		timerTooltip: {
			lift: {
				title: 'Music timer',
				body: `You should now do your high-effort work. When the time is up, we’ll
				change back to the podcast.`,
			},
			rest: {
				title: 'Podcast timer',
				body: `You should now recover. When the time is up, we’ll change to music, and you should increase your effort.`,
			},
		},
		finishedPopup: {
			preHeader: 'Workout complete',
			heading: 'Finished your workout?',
			body: 'Press finish to complete the workout, or continue.',
			primary: 'Finish',
			secundary: 'Continue',
		},
		settings: {
			audioCues: 'Audio cues',
			playbackControlLabel: 'Playback control',
			playbackControl: 'Choose the playback button you want on the workout screen.',
			pauseWithTimerRest: 'Pause podcast with timer',
			pauseWithTimerLift: 'Pause music with timer',
			pauseWithTimerText: 'Pause podcast & music when you pause the timer.',
			restVolume: 'Podcast volume',
			liftVolume: 'Music volum',
			podcastSpeed: 'Podcast speed',
			backgrounds: 'Backgrounds',
			emoji: {
				restTitle: 'Recover emoji',
				restSubTitle: 'Pick an emoji to prime you to recover',
				liftTitle: 'Work emoji',
				liftSubTitle: 'Pick an emoji to prime you to work',
			},
			counterLabel: 'Rounds counter',
			counter: `Show a counter for how many times you've shifted`,
		},
		headphoneShift: {
			instructions: '👋 Instructions!',
			tip: 'Tip #1',
			heading: 'Shift with headphones',
			body: 'Tap pause on your headphones to quckly shift between podcasts and music!',
			button: 'Gotcha',
		},
	},
	podcastsAndMusic: {
		nowPlaying: 'Playing',
		music: 'Music',
		podcasts: 'Podcasts',
		queue: 'Queue',
		discover: 'Discover',
		playlists: 'Playlists',
		channels: 'Shows',
		notes: 'Notes',
		powerSongs: 'Power songs',
		edit: 'Edit',
		hideEdit: 'Hide',
		upNext: 'Up next:',
		follow: 'Follow',
		unfollow: 'Unfollow',
		errors: {
			fetchSpotify: {
				title: 'Failed to get music',
				subTitle: `We couldn't find any music from your ${'\n'}Spotify account. Please try to reconnect!`,
				buttonText: 'Reconnect',
			},
			fetchPodcast: 'Failed to fetch podcasts. Please try again later!',
		},
		musicSearch: {
			title: 'Find your next workout jam',
			placeholder: 'Playlist, artist, album or track...',
		},
		podcastSearch: {
			title: 'Search for a show',
			placeholder: 'Name of the show...',
			error: 'Could not get podcasts at this point. Please try again later',
		},
		discoverTab: {
			lasterInNo: 'Latest in Norway 🇳🇴',
			news: 'Catch up with the news 📰',
			fitness: 'Latest in fitness 💪',
			calm: 'Rest to calming music 💆🏻‍♀️',
			shows: 'Popular shows 📈',
			seeAll: 'See all',
		},
	},
	settings: {
		music: 'Music',
		podcasts: 'Podcasts',
		title: 'Settings',
		account: {
			loggedIn: 'Logged in',
			logOut: 'Log out',
			notLoggedIn: 'Not logged in',
			login: 'Log in to save all your data',
			loginButton: 'Log in',
		},
		theme: {
			caption: 'Change the color theme of the app',
			[Theme.Dark]: 'Dark',
			[Theme.Light]: 'Light',
		},
		pushNotifications: {
			label: 'Notifications',
			body: `Allow push notifications. No spam, we promise.`,
			error: {
				apiError: 'Something went wrong 😩 Please try again later',
				popup: {
					preHeader: 'Notifications',
					heading: 'We need your permission',
					body: 'Please open the settings app and enable push notifications',
					primaryAction: 'Go to settings',
					secundaryAction: 'Cancel',
				},
			},
		},
		myData: {
			label: 'Persisted data',
		},
		rate: 'Rate Shift',
		share: 'Share with friends',
		feedback: 'Feedback',
		whatsNew: `What's new?`,
		appTracking: 'App tracking',
		openSource: 'Open source',
		terms: 'Terms & conditions',
		privacy: 'Privacy',
	},
	newTimer: {
		title: `What's the name of your `,
		title2: 'activity?',
		continue: 'Continue',
	},
	editTimer: {
		timer: 'Timer: ',
	},
	advancedTimer: {
		finish: 'Finish',
		addRound: '+ Add round',
	},
	workoutFinished: {
		title: 'Workout finished!',
		subTitle: 'You just smashed your third workout.',
		finish: 'Finish',
		feels: 'How was it?',
		liftDuration: 'Music duration',
		restDuration: 'Podcast duration',
		shareCaption: 'Share Shift with your friends!',
		shareButton: 'Share',
		feedbackCaption: 'Do you have any feedback?',
		feedbackButton: 'Give feedback',
	},
	curatedWorkouts: {
		heading: 'Shift workout',
		overview: 'Overview',
		settings: 'Settings',
		activityTitle: 'Running with Shift',
		activityBody:
			'Repeated rounds of slow & fast pace. Podcast during slow, and music during fast.',
	},
	auth: {
		signup: {
			title: 'Sign up',
			subTitle: `Create an account to keep your ${'\n'}workout data and podcast history.`,
			spotifyAuth: 'Sign up with Spotify',
			withEmail: 'Sign up with email',
			changeToLogin: (): JSX.Element => (
				<>
					Already have an account?{' '}
					<Secundary fw="Bold" color="link">
						Log in
					</Secundary>
				</>
			),
		},
		login: {
			title: 'Login',
			subTitle: `Login to your Shift account.${'\n'}`,
			spotifyAuth: 'Login with Spotify',
			withEmail: 'Login with email',
			changeToLogin: (): JSX.Element => (
				<>
					Don't have an account?{' '}
					<Secundary fw="Bold" color="link">
						Sign up
					</Secundary>
				</>
			),
		},

		tAndC: (props: TAndCProps): JSX.Element => (
			<>
				By continuing you agree to our{' '}
				<Caption2 {...props} onPress={props.onTermsPress}>
					Terms Of Service{'\n'}
				</Caption2>
				and{' '}
				<Caption2 {...props} onPress={props.onPrivacyPress}>
					privacy policy
				</Caption2>
			</>
		),
		appleCancelError: 'Seems like you cancelled 😢 Maybe try again?',
		appleGeneralError: 'Something went wrong 😩 Maybe try again?',
		or: 'OR',
		createAccount: 'Get more out of Shift',
		signUp: 'Sign up',
		enterEmail: 'Enter your email address:',
		enterCode: 'Enter the 4-digit code \nwe sent to your email:',
		code: 'Code:',
		continue: 'Continue',
		emailPlaceholder: 'Email...',
		resendCode: (): JSX.Element => (
			<>
				Didn't receive a code?{' '}
				<Secundary fw="Bold" color="link">
					Resend it
				</Secundary>
			</>
		),
		didResend: 'A new code was sent to your email!',
	},
	statsItems: {
		calories: 'Calories',
		activityType: 'Activity type',
		distance: 'Distance',
	},
	forceUpgrade: {
		preHeader: 'App update',
		heading: '👋 App update required',
		body: `We've made some changes that requires an update.`,
		action: 'Upgrade',
	},
	paywall: {
		loading: 'Loading data...',
		fetchError: 'Failed to fetch data. Please try again later!',
		a: {
			heading: ({
				price,
				isOffer,
				tProps,
				highlightProps,
			}: PaywallHeadingProps): JSX.Element =>
				isOffer ? (
					<Lead {...tProps}>
						First week free, then{' '}
						<Lead {...tProps} {...highlightProps}>
							{price}{' '}
						</Lead>
						per year
					</Lead>
				) : (
					<Lead {...tProps}>
						Get started\nfor just{' '}
						<Lead {...tProps} {...highlightProps}>
							{price}
						</Lead>{' '}
						per month
					</Lead>
				),
			plan: 'Your plan:',
			chooseProduct: 'Choose your subscription',
			items: [
				(p: TProps): React.ReactElement => (
					<>
						Pick a <Body {...p}>podcast</Body> you like
					</>
				),
				(p: TProps): React.ReactElement => (
					<>
						Try Shift for your <Body {...p}>next workout</Body>
					</>
				),
				(): React.ReactElement => <>Not for you? Cancel the free trial</>,
				(p: TProps): React.ReactElement => (
					<>
						One week from now we'll start charging your account, and you'll have{' '}
						<Body {...p}>true entertaining workouts</Body>with podcasts and music.
					</>
				),
			],
		},
		b: {
			heading: ({ tProps, highlightProps }: PaywallHeadingProps): JSX.Element => (
				<Lead {...tProps}>
					Bring{' '}
					<Lead {...tProps} {...highlightProps}>
						entertainment
					</Lead>{' '}
					to your workouts
				</Lead>
			),
			checkedItems: [
				{
					title: 'Truly entertaining workouts',
					body:
						'Shift is a completely new way to work out. We play your podcast when you chill, and music when its hard.',
				},
				{
					title: 'Train your body AND your mind',
					body:
						'Control your rest time, and work time. Music plays during work, podcasts during rest.',
				},
				{
					title: 'A killer workout timer',
					body: 'Get workouts optimized for your podcast listening. ',
				},
				{
					title: 'Workout motivation: solved',
					body:
						'Customize your workout screen with gifs and beautifull backgrounds. Add emojis and custom textsx.',
				},
				{
					title: 'Get more out of your workout music',
					body:
						'Save your intense music for the hard work. It really helps you to push it when it matters!',
				},
			],
			terms: 'Terms and conditions',
		},
		testamonials: `Here’s what people say:`,
		testamonialItems: [
			{
				title: 'I love this app',
				body:
					'Awesome for when you need the motivation music brings but your still interested in learning from podcasts.',
			},
			{
				title: 'This is so great!',
				body:
					'Awesome for when you need the motivation music brings but your still interested in learning from podcasts.',
			},
		],
		renewalTerms: {
			annualPre: 'After your free trial, the annual',
			monthlyPre: 'The monthly',
			body: ({ preText, price }: RenewProps): string =>
				`${preText} subscription cost is ${price}, and will automatically renew, unless you cancel the auto-renew period. Payment is charged to your ${global.ifIos(
					'iTunes account',
					'Google Play account'
				)}.`,
		},
		productStrings: ({
			monthly,
			annual,
			isFirstWeekFree,
			perMonthAnnual,
		}: ProductStringsArgs): ProductStringsReturnType => {
			const trialString = isFirstWeekFree ? `Get the first week free` : 'Get started now!'

			return {
				purchaseString: trialString,
				monthly: {
					price: monthly.price_string?.replace(',00', ''),
					title: '1\nMonth',
					perMonthString: `${monthly.price_string} / Month`,
				},
				annual: {
					price: annual.price_string.replace(',00', ''),
					title: '12\nMonths',
					popular: 'Most popular',
					perMonthString: `${perMonthAnnual} / Month`,
					savings: (pct: number) => `Save ${pct}%`,
				},
			}
		},
		errors: {
			fetch: 'Failed to get purchase data.\nPlease try again later!',
			general: `Failed to purchase Shift premium.\Have you added your payment details for ${global.ifIos(
				'Apple',
				'Google'
			)}!`,
			cancelled: 'Looks like you cancelled 😩',
		},
	},
	appTracking: {
		optOut: 'Opt out of tracking',
		optIn: 'Allow tracking',
	},
}

export default en
