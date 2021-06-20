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
import { Strings } from './types'

const no: Strings = {
	navigation: {
		music: 'Musikk',
		podcasts: 'Podcasts',
		continue: 'Fortsett',
		save: 'Lagre',
		screenFooter: 'Made with ❤️ in Oslo',
	},
	general: {
		showMore: 'Vis mer',
		save: 'Lagre',
	},
	errors: {
		general: 'Oh no, something went wrong! Please, try again later.',
		network: `Nettverk problemer! Vennligst se til at du er online 📡`,
	},
	timer: {
		turnOffTimer: 'Skru av timeren',
		restTimer: 'For how long should the podcast play before we shift to music?',
		liftTimer: 'For how long should music play before we shift to the podcast?',
		disasbled: 'Timeren er deaktivert.',
	},
	rating: {
		preHeader: 'Tilbakemelding',
		heading: 'Hva synes du om Shift?',
		body: 'Vi ønsker din tilbakemelding! Det hjelper oss å gjøre Shift bedre.',
		primaryLabel: `Supert 👍`,
		secundaryLabel: `Misfornøyd 👎`,
	},
	home: {
		startWorkout: 'Start Trening',
	},
	onboarding: {
		hi: 'Hei 👋',
		vibe: 'Velg din stil',
		continue: 'Fortsett',
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
		restMode: 'Podcast modus',
		music: 'Musikk',
		duration: 'Varighet',
		finish: 'Ferdig',
		podcasts: 'Podcasts',
		timerPaused: {
			title: 'Timeren pauset',
			text:
				'Vanligvis setter du timeren på pause når du skal rydde opp utstyr, eller trenger en lengre pause.',
		},
		timerTooltip: {
			lift: {
				title: 'Musikk timer',
				body: `Det er nå du skal jobbe hardt. Når tiden er ute, bytter vi tilbake til podcasten din.`,
			},
			rest: {
				title: 'Podcast timer',
				body: `Du skal nå hvile. Når tiden er ute bytter vi til musikk, og du bør øke intensiteten.`,
			},
		},
		finishedPopup: {
			preHeader: 'Fullfør',
			heading: 'Ferdig med treningsøkten?',
			body: 'Trykk ferdig for å fullføre, eller velg å fortsette.',
			primary: 'Ferdig',
			secundary: 'Fortsett',
		},
		settings: {
			audioCues: 'Audio cues',
			playbackControlLabel: 'Avspillingskontroll',
			playbackControl: 'Velg hvilken spiller-knapp du ønsker på treningsskjermen.',
			pauseWithTimerRest: 'Pause podcast med timer',
			pauseWithTimerLift: 'Pause musikk med timer',
			pauseWithTimerText: 'Pause musikk og podcast når man pauser timeren.',
			restVolume: 'Podcast volum',
			liftVolume: 'Musikk volum',
			podcastSpeed: 'Podcast hastighet',
			backgrounds: 'Bakgrunner',
			emoji: {
				restTitle: 'Hvile emoji',
				restSubTitle: 'Velg en emoji for å minne deg om å hvile',
				liftTitle: 'Kjør emoji',
				liftSubTitle: 'Velg en emoji for å motivere deg til å gi alt',
			},
			counterLabel: 'Runde-teller',
			counter: 'Vis en teller for hvor mange ganger du har shiftet',
		},
		headphoneShift: {
			instructions: '👋 Instrukser!',
			tip: 'Tips #1',
			heading: 'Shift med hodetelefoner',
			body: 'Trykk pause på hodetelefonene dine for å shifte mellom podcasts og musikk!',
			button: 'Den er grei',
		},
	},
	podcastsAndMusic: {
		nowPlaying: 'Playing',
		music: 'Music',
		podcasts: 'Podcasts',
		queue: 'Queue',
		discover: 'Oppdag',
		playlists: 'Spillelister',
		channels: 'Shows',
		notes: 'Notes',
		powerSongs: 'Power songs',
		edit: 'Endre',
		hideEdit: 'Skjul',
		upNext: 'Neste:',
		follow: 'Følg',
		unfollow: 'Avfølg',
		errors: {
			fetchSpotify: {
				title: 'Noe gikk galt',
				subTitle: `Vi klarte ikke hente musikk fra din ${'\n'}Spotify konto. Vennligst prøv å koble til på nytt!`,
				buttonText: 'Koble til på nytt',
			},
			fetchPodcast: 'Noe gikk galt med hentingen av podcasten. Prøv igjen senere?',
		},
		musicSearch: {
			title: 'Finn din favoritt treningsmusikk',
			placeholder: 'Spilleliste, artist, album eller sang...',
		},
		podcastSearch: {
			title: 'Søk etter en podcast',
			placeholder: 'Skriv her...',
			error: 'Kunne ikke hente podcasts. Prøv på nytt senere?',
		},
		discoverTab: {
			lasterInNo: 'Det siste fra Norge 🇳🇴',
			news: 'Hør siste nyheter 📰',
			fitness: 'Det siste innen fitness 💪',
			calm: 'Hvil til rolig musikk 💆🏻‍♀️',
			shows: 'Populære show 📈',
			seeAll: 'Se alle',
		},
	},
	settings: {
		music: 'Music',
		podcasts: 'Podcasts',
		title: 'Innstillinger',
		account: {
			loggedIn: 'Innlogget',
			logOut: 'Logg ut',
			notLoggedIn: 'Logget ut',
			login: 'Logg inn for å lagre dine data',
			loginButton: 'Logg inn',
		},
		theme: {
			caption: 'Endre fargetema i appen',
			[Theme.Dark]: 'Mørk',
			[Theme.Light]: 'Lys',
		},
		pushNotifications: {
			label: 'Varslinger',
			body: `Tillat push varslinger. Ingen spam, vi lover.`,
			error: {
				apiError: 'Noe gikk galt 😩 Prøv igjen senere?',
				popup: {
					preHeader: 'Varslinger',
					heading: 'Vi trenger din tillatelse',
					body: 'Du kan endre varslingstillatelser ved å åpne Innstillinger-appen.',
					primaryAction: 'Åpne Innstillinger',
					secundaryAction: 'Avbryt',
				},
			},
		},
		myData: {
			label: 'Lagrede data',
		},
		rate: 'Gi en vurdering',
		share: 'Del med venner',
		feedback: 'Gi tilbakemelding',
		whatsNew: `Hva er nytt?`,
		appTracking: 'Datainnsamling',
		openSource: 'Åpen kildekode',
		terms: 'Tjenestevilkår',
		privacy: 'Personvernsregler',
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
		title: 'Ferdig!',
		subTitle: 'Gratulerer med din første Shift-økt.',
		finish: 'Fullfør',
		feels: 'Hvordan var økten?',
		liftDuration: 'Music varighet',
		restDuration: 'Podcast varighet',
		shareCaption: 'Del Shift med dine venner!',
		shareButton: 'Del',
		feedbackCaption: 'Har du en tilbakemelding?',
		feedbackButton: 'Gi tilbakemelding',
	},
	auth: {
		signup: {
			title: 'Opprett konto',
			subTitle: `Opprett en konto for å ta vare på dine ${'\n'}treningsdata og podcast historikk.`,
			spotifyAuth: 'Registrer deg med Spotify',
			withEmail: 'Registrer deg med epost',

			changeToLogin: (): JSX.Element => (
				<>
					Har du en konto fra før?{' '}
					<Secundary fw="Bold" color="link">
						Logg inn
					</Secundary>
				</>
			),
		},
		login: {
			title: 'Logg inn',
			subTitle: `Logg inn med din Shift konto.${'\n'}`,
			spotifyAuth: 'Logg inn med Spotify',
			withEmail: 'Logg inn med epost',
			changeToLogin: (): JSX.Element => (
				<>
					Har du ikke en konto?{' '}
					<Secundary fw="Bold" color="link">
						Registrer deg
					</Secundary>
				</>
			),
		},
		tAndC: (props: TAndCProps): JSX.Element => (
			<>
				Ved å fortsette sier du deg enig våre{' '}
				<Caption2 {...props} onPress={props.onTermsPress}>
					tjenestevilkår{'\n'}
				</Caption2>
				og{' '}
				<Caption2 {...props} onPress={props.onPrivacyPress}>
					personvernsregler
				</Caption2>
			</>
		),
		appleCancelError: 'Ser ut til at du kansellerte 😢 Hva med å prøve på nytt?',
		appleGeneralError: 'Noe gikk galt 😩 Hva med å prøve på nytt?',
		or: 'ELLER',
		createAccount: 'Få mer ut av Shift',
		signUp: 'Opprett konto',
		enterEmail: 'Skriv inn din epost adresse:',
		enterCode: 'Skriv inn den 4-sifrede koden \nvi sente til din epost:',
		continue: 'Fortsett',
		emailPlaceholder: 'Epost...',
		code: 'Kode:',
		resendCode: (): JSX.Element => (
			<>
				Mottok du ikke koden?{' '}
				<Secundary fw="Bold" color="link">
					Send på nytt
				</Secundary>
			</>
		),
		didResend: 'Ny kode er på vei til din epost!',
	},
	statsItems: {
		calories: 'Kalorier',
		activityType: 'Aktivitets type',
		distance: 'Distanse',
	},
	forceUpgrade: {
		preHeader: 'App oppdatering',
		heading: '👋 Oppdatering kreves',
		body: `Vi har gjort noen endringer som krever en oppdatering.`,
		action: 'Oppdater',
	},
	paywall: {
		loading: 'Laster data...',
		fetchError: 'Kunne ikke hente data. Prøv igjen senere?',
		a: {
			heading: ({
				price,
				isOffer,
				tProps,
				highlightProps,
			}: PaywallHeadingProps): JSX.Element =>
				isOffer ? (
					<Lead {...tProps}>
						Første uke gratis, så{' '}
						<Lead {...tProps} {...highlightProps}>
							{price}{' '}
						</Lead>
						per år
					</Lead>
				) : (
					<Lead {...tProps}>
						Kom i gang{'\n'}for kun{' '}
						<Lead {...tProps} {...highlightProps}>
							{price}
						</Lead>{' '}
						i måneden
					</Lead>
				),
			plan: 'Din plan:',
			chooseProduct: 'Velg ditt abonnement',

			items: [
				(p: TProps): React.ReactElement => (
					<>
						Velg en <Body {...p}>podcast</Body> du liker
					</>
				),
				(p: TProps): React.ReactElement => (
					<>
						Prøv Shift for din <Body {...p}>neste treningsøkt</Body>
					</>
				),
				(): React.ReactElement => <>Likte det ikke? Kanseller prøveperioden</>,
				(p: TProps): React.ReactElement => (
					<>
						Om en uke starter abonnementet, og du vil ha{' '}
						<Body {...p}>ekte underholdende økter</Body> med podcasts og musikk.
					</>
				),
			],
		},
		b: {
			heading: ({ tProps, highlightProps }: PaywallHeadingProps): JSX.Element => (
				<Lead {...tProps}>
					Trening med din{' '}
					<Lead {...tProps} {...highlightProps}>
						underholdning
					</Lead>
				</Lead>
			),
			checkedItems: [
				{
					title: 'Ekte underholdende trening',
					body:
						'Shift er en helt ny måte å trene på. Hør podcasts mens du hviler, og musikk når du trenger det mest.',
				},
				{
					title: 'Tren muskler og hjernen',
					body:
						'Gjør treningen 2x mer produktiv ved å lytte til podcasts når du har overskudd til det',
				},
				{
					title: 'Unik trenings-timer',
					body: `Shift's timer er laget for å optimalisere din restitusjon.`,
				},
				{
					title: 'Farvel dårlig motivasjon 👋 ',
					body:
						'La deg motivere av å lytte til dine favoritt podcaster, så vil treningen komme av seg selv.',
				},
				{
					title: 'Optimaliser din treningsmusikk',
					body:
						'Lei av å høre intens musikk mens du prøver å hvile? Med Shift spiller vi musikken bare når du jobber hardt.',
				},
			],
			terms: 'Vilkår',
		},
		testamonials: `Dette er hva folk sier:`,
		testamonialItems: [
			{
				title: 'Jeg elsker denne appen!',
				body:
					'Kjempe kult å kunne høre på podcasts når jeg hviler, og la appen bytte til musikk mens jeg løfter.',
			},
			{
				title: 'Fungerer helt automagisk',
				body:
					'Trenger aldri å åpne appen under trening, den bare går av seg selv i bakgrunn. Kult at man også kan bytte mellom podcasts og musikk ved å trykke på hodetelefoner!',
			},
		],
		renewalTerms: {
			annualPre: 'Etter prøvepreioden, vil den årlige abonnementsprisen være',
			monthlyPre: 'Den månedlige abonnementsprisen er',
			body: ({ preText, price }: RenewProps): string =>
				`${preText} ${price}, og vil automatisk fornyes, med mindre du har kansellert. Betalingen blir belastet på din ${global.ifIos(
					'iTunes konto',
					'Google Play konto'
				)}.`,
		},

		productStrings: ({
			monthly,
			annual,
			isFirstWeekFree,
		}: ProductStringsArgs): ProductStringsReturnType => {
			const trialString = isFirstWeekFree ? `Få første uke gratis` : 'Kom i gang'

			return {
				purchaseString: trialString,
				monthly: {
					price: monthly.price_string?.replace(',00', ''),
					title: '1\nMåned',
					perMonthString: `${monthly.price_string} / Mnd`,
				},
				annual: {
					price: annual.price_string.replace(',00', ''),
					title: '12\nMåneder',
					popular: 'Mest populær',
					perMonthString: `${(annual.price / 12).toFixed(2)} ${
						annual.currency_code
					} / Mnd`,
					savings: (pct: number) => `Spar ${pct}%`,
				},
			}
		},

		errors: {
			fetch: 'Kunne ikke hente abonnementsdata.\nPrøv igjen senere?',
			general: `Betalingen gikk ikke gjennom.\nHar du lag til betalingsinfo hos ${global.ifIos(
				'Apple',
				'Google'
			)}?`,
			cancelled: 'Ser ut som at du kansellerte 😩',
		},
	},
}

export default no
