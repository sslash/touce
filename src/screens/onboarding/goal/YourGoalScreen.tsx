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
import { useStrings } from '../../../localization/localizedStrings'
import CheckboxRow from '../../../molecules/settings/CheckboxRow'
import Screen from '../../../molecules/screen/Screen'
import { RootStackParamList } from '../../../navigation/types'
import { mainHorizontalMargin } from '../../../theme/metrics'
import analyticsClient from '../../../utils/analyticsClient'
import { goalEmojis, GoalKeys } from './data'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'YourVibe'>
}

const YourGoalScreen = ({ navigation }: Props): JSX.Element => {
	const strings = useStrings().strings.onboarding
	const [selected, setSelected] = useState<GoalKeys>(null)
	const goals = strings.goals
	const goalKeys = Object.keys(goals)

	const onContinue = () => {
		analyticsClient.setEmpathyProp('goal', selected)
		navigation.navigate('HowTo')
	}

	return (
		<Bg bg="background" flex={1}>
			<Screen
				testID="yourGoalScreen"
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
				{goalKeys.map((key: GoalKeys) => {
					const goal = goals[key]
					const isSelected = key === selected
					return (
						<V mb={6} key={goal.title}>
							<CheckboxRow<GoalKeys>
								testID={`goal-${key}`}
								id={key}
								emoji={goalEmojis[key]}
								{...goal}
								{...{ setSelected, isSelected }}
							/>
						</V>
					)
				})}
			</Screen>
			<SafeAreaView style={{ paddingHorizontal: mainHorizontalMargin }}>
				<Button mb={3} onPress={onContinue} disabled={!selected} testID="goalContinue">
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

export default YourGoalScreen
