import React, { useState } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Bg from '../../../atoms/Bg'
import Button from '../../../atoms/Button'
import { Sludge, SludgeVariant } from '../../../atoms/sludges'
import Spacer from '../../../atoms/Spacer'
import Caption2 from '../../../atoms/texts/Caption2'
import Lead2 from '../../../atoms/texts/Lead2'
import V from '../../../atoms/V'
import activityCommands from '../../../commands/ActivityCommands'
import { activityEmojis } from '../../../data/activities/activities'
import { useStrings } from '../../../localization/localizedStrings'
import Screen from '../../../molecules/screen/Screen'
import CheckboxRow from '../../../molecules/settings/CheckboxRow'
import { RootStackParamList } from '../../../navigation/types'
import { mainHorizontalMargin } from '../../../theme/metrics'
import { createLogger } from '../../../utils/logger'
import { Activity, ActivityKeys } from './types'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'YourVibe'>
}

const VibeScreen = ({ navigation }: Props): JSX.Element => {
	const [selected, setSelected] = useState<ActivityKeys>(null)
	const strings = useStrings().strings.onboarding
	const activities: Record<ActivityKeys, Activity> = strings.activities
	const activityKeys = Object.keys(activities)

	const onContinue = () => {
		activityCommands.setActivityInOnboarding(selected, createLogger(undefined, 'vibe'))
		navigation.navigate('YourGoal')
	}

	return (
		<Bg bg="background" flex={1}>
			<Screen
				testID="vibeScreen"
				sludge={SludgeVariant.Ditto}
				preset="scroll"
				stdMargin
				mt={4}
				headerTitle={<Lead2 fw="Medium">{strings.hi}</Lead2>}
				headerSubTitle={<Lead2 fw="Bold">{strings.vibe}</Lead2>}
			>
				<Spacer y={60} />
				<View>
					<Sludge variant={SludgeVariant.SpiderLines} style={{ left: 38, top: -20 }} />
				</View>
				{activityKeys.map((key: ActivityKeys) => {
					const activity = activities[key]
					const isSelected = key === selected
					return (
						<V mb={4} key={activity.title}>
							<CheckboxRow<ActivityKeys>
								{...activity}
								testID={`activity-${key}`}
								id={key}
								emoji={activityEmojis[key]}
								{...{ setSelected, isSelected }}
							/>
						</V>
					)
				})}
			</Screen>
			<SafeAreaView style={{ paddingHorizontal: mainHorizontalMargin }}>
				<Button mb={3} onPress={onContinue} disabled={!selected} testID="vibeContinue">
					{strings.continue}
				</Button>
				<V width={250} as="center">
					<Caption2 ta="center" lh={18} color="grey500">
						{strings.terms('primaryText')}
					</Caption2>
				</V>
			</SafeAreaView>
		</Bg>
	)
}

export default VibeScreen
