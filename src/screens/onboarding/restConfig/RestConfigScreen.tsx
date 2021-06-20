import React, { useState } from 'react'
import { View } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button from '../../../atoms/Button'
import { PickerVariant } from '../../../atoms/Picker'
import { SludgeVariant } from '../../../atoms/sludges'
import Spacer from '../../../atoms/Spacer'
import Lead from '../../../atoms/texts/Lead'
import { useStrings } from '../../../localization/localizedStrings'
import Screen from '../../../molecules/screen/Screen'
import TimerPicker from '../../../molecules/TimerPicker'
import { RootStackParamList } from '../../../navigation/types'
import { timerPickerItems } from '../../../utils/timer'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'HowTo'>
}

const RestConfigScreen = ({ navigation }: Props): JSX.Element => {
	const [selected, setSelected] = useState<number>(timerPickerItems[2].value)

	const {
		strings: {
			onboarding: { restConfig: strings },
		},
	} = useStrings()

	const onSetSelected = (v: number) => setSelected(v)

	const onContinue = () => {
		// update timer here...

		navigation.navigate('Home')
	}

	return (
		<Screen
			testID="RestConfig"
			sludge={SludgeVariant.Ditto}
			preset={'fixed'}
			stdMargin
			headerTitle={
				<Lead fw="Bold">
					{strings.title1}
					<Lead fw="Bold" color="primary600">
						{strings.title2}
					</Lead>
				</Lead>
			}
			headerSubTitle={`That’s when we play your\npodcast!`}
		>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
				}}
			>
				<Spacer y={55} />
				<TimerPicker
					variant={PickerVariant.Large}
					selected={selected}
					setSelected={onSetSelected}
				/>
			</View>
			<View style={{ height: 80 }}>
				<Button onPress={onContinue} hasHaptic>
					{strings.time(selected)}
				</Button>
			</View>
		</Screen>
	)
}

export default RestConfigScreen
