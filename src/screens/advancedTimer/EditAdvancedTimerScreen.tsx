import React, { useState } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button, { ButtonVariant } from '../../atoms/Button'
import { PickerVariant } from '../../atoms/Picker'
import Row from '../../atoms/Row'
import Separator from '../../atoms/Separator'
import { SludgeVariant } from '../../atoms/sludges'
import Spacer from '../../atoms/Spacer'
import Caption from '../../atoms/texts/Caption'
import Lead2 from '../../atoms/texts/Lead2'
import V from '../../atoms/V'
import { useStrings } from '../../localization/localizedStrings'
import { TimerTemplate } from '../../models/timerTemplate'
import AdvancedTimerRound from '../../molecules/AdvancedTimerRound'
import Screen from '../../molecules/screen/Screen'
import TimerPicker from '../../molecules/TimerPicker'
import { RootStackParamList } from '../../navigation/types'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'EditAdvancedTimer'>
}

const rounds = [
	{
		rest: { durationSeconds: 120, isOn: true },
		work: { durationSeconds: 130, isOn: true },
	},
	{
		rest: { durationSeconds: 120, isOn: true },
		work: { durationSeconds: 130, isOn: true },
	},
	{
		rest: { durationSeconds: 120, isOn: true },
		work: { durationSeconds: 130, isOn: true },
	},
	{
		rest: { durationSeconds: 120, isOn: true },
		work: { durationSeconds: 130, isOn: true },
	},
]

const EditAdvancedTimerScreen = ({ navigation }: Props): JSX.Element => {
	const { strings } = useStrings()
	const [selected, setSelected] = useState(0)

	const renderRound = ({ item, index }: ListRenderItemInfo<TimerTemplate>) => (
		<AdvancedTimerRound timerTemplate={item} index={index} isSelected={selected === index} />
	)

	const onNewRound = () => {}

	const onFinish = () => {}

	return (
		<Screen
			testID="EditTimerScreen"
			sludge={SludgeVariant.Carpet}
			preset={'fixed'}
			headerTitle="Edit Timer"
			stdMargin
			sludgeStyle={{ top: 12 }}
			navigation={navigation}
			backButtonStyle="push"
		>
			<V flex={1} mt={5}>
				<Row style={{ height: '100%', width: '100%' }}>
					<FlatList
						style={{ flexGrow: 0 }}
						data={rounds}
						renderItem={renderRound}
						keyExtractor={(item, idx) => `${idx}`}
					/>
					<Row style={{ flex: 1, flexGrow: 1 }}>
						<V py={4} mx={5}>
							<Separator isHorizontal={false} />
						</V>
						<V ai="center" jc="center" style={{ flexGrow: 1 }}>
							<V ai="center" mb={4}>
								<Caption color="grey500">Editing</Caption>
								<Lead2 fw="Bold">Round 8</Lead2>
							</V>
							<TimerPicker
								variant={PickerVariant.Small}
								{...{ selected, setSelected }}
							/>
						</V>
					</Row>
				</Row>
			</V>
			<SafeAreaView>
				<Row jc="center">
					<Button
						variant={ButtonVariant.Outline}
						size="small"
						width={btnWidth}
						onPress={onNewRound}
					>
						{strings.advancedTimer.addRound}
					</Button>
					<Spacer x={16} />
					<Button
						variant={ButtonVariant.Primary}
						size="small"
						width={btnWidth}
						onPress={onFinish}
					>
						{strings.advancedTimer.finish}
					</Button>
				</Row>
			</SafeAreaView>
		</Screen>
	)
}

const btnWidth = 132

export default EditAdvancedTimerScreen
