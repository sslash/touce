import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button, { ButtonVariant } from '../atoms/Button'
import { SludgeVariant } from '../atoms/sludges'
import Spacer from '../atoms/Spacer'
import Caption from '../atoms/texts/Caption'
import V from '../atoms/V'
import { useStrings } from '../localization/localizedStrings'
import Screen from '../molecules/screen/Screen'
import TickedItemsList, { FixedItem } from '../molecules/TickedItemsList'
import { RootStackParamList } from '../navigation/types'
import { useUserConfigs } from '../store/userConfigs'
import { spaceScale } from '../theme/spacing'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'AppTracking'>
}

const trackingItems = [
	{
		title: 'Email',
		body: 'We store your email so you can log and out, and so we can send you relevant content',
	},
	{
		title: 'Workout data',
		body:
			'We collect the duration of your workout and the name of your timer. We do this to learn more about what kinds of workouts users have.',
	},
	{
		title: 'Podcast data',
		body:
			'We collect the subscriptions you follow. We do this to learn what kind of podcast content is relevant for our users.',
	},
	{
		title: 'Music data',
		body:
			'We collect the playlists you choose. We do this to learn what kind of music is relevant for our users.',
	},

	{
		title: 'App functions',
		body:
			'We collect which settings you are using in the app. We do this to learn when we should remove features and if new features are helpful',
	},
]

const AppTrackingScreen = ({ navigation }: Props): JSX.Element => {
	const { allowTracking, toggleAllowTracking } = useUserConfigs()
	const s = useStrings().strings.appTracking
	const onOptOut = () => {
		toggleAllowTracking()
	}

	return (
		<Screen
			testID="AppTracking"
			sludge={SludgeVariant.Ditto}
			preset={'scroll'}
			stdMargin
			headerTitle={'App tracking'}
			headerSubTitle={`Here's all the data Shift collects. We do this merely to build a better product for you ❤️`}
			navigation={navigation}
			backButtonStyle="push"
		>
			<V pt={4}>
				<Caption italic color="secundaryText">
					All these data points are stored securely, and will never be sold in any way. No
					one is allowed to look at your data.
				</Caption>
				<Spacer y={96} />

				<TickedItemsList<FixedItem>
					data={trackingItems}
					keyGenerator={(item) => item.title}
					rowStyle={{ marginBottom: spaceScale[5] }}
					sparklingLast
					tickVariant="checkmark"
				/>

				<Spacer y={spaceScale[6]} />

				<SafeAreaView>
					<Button
						onPress={onOptOut}
						hasHaptic
						variant={allowTracking ? ButtonVariant.Outline : ButtonVariant.Primary}
					>
						{allowTracking ? s.optOut : s.optIn}
					</Button>
				</SafeAreaView>
			</V>
		</Screen>
	)
}

export default AppTrackingScreen
