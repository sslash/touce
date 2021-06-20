import { ParamListBase } from '@react-navigation/routers'
import React from 'react'
import { Alert } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'

export function usePreventGoingBack<T extends ParamListBase>(
	navigation: NativeStackNavigationProp<T>
): void {
	React.useEffect(
		() =>
			navigation.addListener('beforeRemove', (e) => {
				// Prevent default behavior of leaving the screen
				e.preventDefault()

				// Prompt the user before leaving the screen
				Alert.alert(
					'Are you sure you wanna quit?',
					'The workout is still going on. Are you sure?',
					[
						{ text: `Don't leave`, style: 'cancel', onPress: () => {} },
						{
							text: 'Discard',
							style: 'destructive',
							// If the user confirmed, then we dispatch the action we blocked earlier
							// This will continue the action that had triggered the removal of the screen
							onPress: () => navigation.dispatch(e.data.action),
						},
					]
				)
			}),
		[navigation]
	)
}
