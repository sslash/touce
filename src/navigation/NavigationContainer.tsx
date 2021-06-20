import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { useHasSeenOnboarding } from '../hooks/useHasSeenOnboarding'
import BottomSheetDialogScreen from '../screens/bottomSheetDialog/BottomSheetDialogScreen'
import NotFoundScreen from '../screens/NotFound/NotFoundScreen'
import { useTheme } from '../theme/themeContext'
import { globalNavigationRef } from './globalNav'
import { SHARED_SCREENS } from './sharedScreens'
import { RootStackParamList, ScreenConfigProps } from './types'
import { WorkoutStack } from './WorkoutStack'

enableScreens()

const Stack = createNativeStackNavigator<RootStackParamList>()
const screenKeys = Object.keys(SHARED_SCREENS) as (keyof RootStackParamList)[]

const NavigationContainerWrapper: React.FC = () => {
	const { colors } = useTheme()

	const { hasSeenOnboarding } = useHasSeenOnboarding()
	const initialRoute = hasSeenOnboarding ? 'Home' : 'YourVibe'

	return (
		<NavigationContainer ref={globalNavigationRef}>
			<Stack.Navigator initialRouteName={initialRoute}>
				{screenKeys.map((name) => {
					const screen = SHARED_SCREENS[name]
					const options: ScreenConfigProps['options'] = (props) => {
						const _options =
							typeof screen.options === 'function'
								? screen.options(props)
								: screen.options || defaultOptions

						return {
							headerStyle: { backgroundColor: colors.background },
							..._options,
						}
					}

					return (
						<Stack.Screen
							key={name}
							name={name}
							getComponent={() => screen.component}
							options={options}
						/>
					)
				})}
				<Stack.Screen
					name="NotFound"
					component={NotFoundScreen}
					options={{ title: 'Oops!' }}
				/>
				<Stack.Screen name="Workout" component={WorkoutStack} options={defaultOptions} />
				<Stack.Screen
					name="BottomSheetDialog"
					component={BottomSheetDialogScreen}
					options={{
						stackAnimation: 'none',
						stackPresentation: 'transparentModal',
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const defaultOptions = { headerShown: false }

export default NavigationContainerWrapper
