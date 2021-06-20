import React from 'react'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import PodcastAndMusicScreen from '../screens/media/PodcastAndMusicScreen'
import WorkoutScreen from '../screens/workout/WorkoutScreen'
import WorkoutFinishedScreen from '../screens/workoutFinished/WorkoutFinishedScreen'
import { useTheme } from '../theme/themeContext'
import { inModal, ModalBackButton, PodcastAndMusicSearch } from './navComponents'
import { RootStackParamList } from './types'

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const Stack = createSharedElementStackNavigator()

export const WorkoutStack = (): JSX.Element => {
	const { colors } = useTheme()
	return (
		<Stack.Navigator mode="modal" initialRouteName="Workout">
			<Stack.Screen
				name="Workout"
				component={WorkoutScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="PodcastAndMusic"
				component={PodcastAndMusicScreen}
				sharedElements={(route) => {
					const sharedImageId = route.params.sharedImageId as string

					return [sharedImageId]
				}}
				options={(
					props: NativeStackScreenProps<RootStackParamList, 'PodcastAndMusic'>
				) => ({
					headerLeft: inModal(() => <ModalBackButton {...props} />),
					headerRight: inModal(() => <PodcastAndMusicSearch {...props} />),
					cardShadowEnabled: false,
					headerTitle: null,
					headerStyle: {
						shadowOpacity: 0,
						backgroundColor: colors.background,
					},
				})}
			/>
			<Stack.Screen
				name="WorkoutFinished"
				component={WorkoutFinishedScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	)
}
