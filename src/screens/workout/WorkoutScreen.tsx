import React from 'react'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import { usePreventGoingBack } from '../../hooks/usePreventGoingBack'
import HorizontalScrollView from '../../molecules/HorizontalScrollView'
import { WorkoutStackParamList } from '../../navigation/types'
import { screenWidth } from '../../theme/metrics'
import ActivityScreen from './components/activity/ActivityScreen'
import BackgroundWrapper from './components/BackgroundWrapper'
import SettingsScreen from './components/settings/SettingsScreen'
import ShiftScreen from './components/ShiftScreen'
import SludgeHeader from './components/SludgeHeader'
import IsLiftingAnimatedManager from './useIsLiftingAnimatedValue'

interface Props {
	navigation: NativeStackNavigationProp<WorkoutStackParamList, 'Workout'>
}

const WorkoutScreen = ({ navigation }: Props): JSX.Element => {
	// TODO: check this on android
	usePreventGoingBack(navigation)
	return (
		<IsLiftingAnimatedManager>
			<BackgroundWrapper>
				<HorizontalScrollView itemWidth={screenWidth} renderHeader={SludgeHeader}>
					{() => (
						<>
							<ActivityScreen />
							<ShiftScreen />
							<SettingsScreen />
						</>
					)}
				</HorizontalScrollView>
			</BackgroundWrapper>
		</IsLiftingAnimatedManager>
	)
}

export default WorkoutScreen
