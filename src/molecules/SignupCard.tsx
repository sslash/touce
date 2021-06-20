import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Caption2 from '../atoms/texts/Caption2'
import Title from '../atoms/texts/Title'
import { Icon } from '../icons'
import { useStrings } from '../localization/localizedStrings'
import { AllScreenParams } from '../navigation/types'
import FancyBrandCard from './FancyBrandCard'

const SignupCard = (): React.ReactElement => {
	const strings = useStrings().strings.auth
	const nav = useNavigation<StackNavigationProp<AllScreenParams, 'Workout'>>()

	const onSignup = () => {
		nav.navigate('Auth')
	}

	return (
		<FancyBrandCard size="scalable" onPress={onSignup}>
			<View style={styles.row}>
				<View>
					<Caption2 color="lightTransparent600" darkColor="lightTransparent800" mb={0}>
						{strings.createAccount}
					</Caption2>
					<Title fw="Bold" color="noModeLight">
						{strings.signUp}
					</Title>
				</View>
				<Icon icon="person-outline" fill="noModeLight" />
			</View>
		</FancyBrandCard>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center',
	},
})

export default SignupCard
