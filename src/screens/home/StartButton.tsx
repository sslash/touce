import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button, { ButtonVariant } from '../../atoms/Button'
import Title from '../../atoms/texts/Title'
import { useStrings } from '../../localization/localizedStrings'
import { RootStackParamList } from '../../navigation/types'

const StartButton = (): JSX.Element => {
	const s = useStrings().strings.home
	const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>()

	const onStart = () => navigation.navigate('Workout')

	return (
		<SafeAreaView style={styles.container}>
			<Button variant={ButtonVariant.Primary} onPress={onStart}>
				<Title color="primary20" darkColor="primaryActionText" italic fw="Fat">
					{s.startWorkout}
				</Title>
			</Button>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 8,
		width: '100%',
	},
})

export default StartButton
