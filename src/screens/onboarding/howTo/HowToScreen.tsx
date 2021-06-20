import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button from '../../../atoms/Button'
import PointyImage, { Direction } from '../../../atoms/PointyImage'
import { Sludge, SludgeVariant } from '../../../atoms/sludges'
import Body from '../../../atoms/texts/Body'
import Lead from '../../../atoms/texts/Lead'
import V from '../../../atoms/V'
import { useHasSeenOnboarding } from '../../../hooks/useHasSeenOnboarding'
import { useStrings } from '../../../localization/localizedStrings'
import Screen from '../../../molecules/screen/Screen'
import { RootStackParamList } from '../../../navigation/types'
import { useCurrentActivityTimer } from '../../../store/currentActivityTimer'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'HowTo'>
}

const HowToScreen = ({ navigation }: Props): JSX.Element => {
	const { strings } = useStrings()
	const { setHasSeenOnboarding } = useHasSeenOnboarding()
	const activityId = useCurrentActivityTimer((s) => s.activityTimer.id)

	const onPress = () => {
		if (activityId === 'strength') {
			navigation.navigate('RestConfig')
		} else if (activityId === 'other') {
			navigation.navigate('ActivityName')
		} else {
			navigation.navigate('Home')
			setHasSeenOnboarding()
		}
	}

	return (
		<Screen testID="howToScreen" unsafe preset="fixed">
			<V flex={1}>
				<View style={{ top: -7, left: -30 }}>
					<Sludge variant={SludgeVariant.Arbok} />
				</View>
				<V px={6} pt={8}>
					<PointyImage
						direction={Direction.BottomRight}
						isRestMode={false}
						source={{
							uri:
								'https://images.unsplash.com/photo-1532384305128-54c7ac0d7139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
						}}
					/>
					<Lead fw="Fat" color="secundary600" mt={4}>
						{strings.onboarding.howTo.lift}
					</Lead>
					<Body style={{ width: 205 }}>{strings.onboarding.howTo.liftSubtitle}</Body>
				</V>
			</V>
			<Sludge variant={SludgeVariant.SpiderLines} />
			<SafeAreaView>
				<View style={{ left: 67 }}>
					<Sludge variant={SludgeVariant.Aipom} />
				</View>
				<V ai="flex-end" style={{ flexGrow: 1, paddingTop: 100, paddingRight: 30 }}>
					<PointyImage
						direction={Direction.BottomRight}
						isRestMode
						source={{
							uri:
								'https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
						}}
					/>
					<Lead fw="Fat" color="secundary600" mt={4} ta="right">
						{strings.onboarding.howTo.rest}
					</Lead>
					<Body style={{ width: 205 }} ta="right">
						{strings.onboarding.howTo.restSubtitle}
					</Body>
				</V>
				<V px={4} pt={6}>
					<Button onPress={onPress} hasHaptic testID="howToContinue">
						{strings.onboarding.howTo.getStarted}
					</Button>
				</V>
			</SafeAreaView>
		</Screen>
	)
}

export default HowToScreen
