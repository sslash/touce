import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import CircularShiftTimer from '../../atoms/circularTimer/CircularShiftTimer'
import Action from '../../atoms/texts/Action'
import Caption from '../../atoms/texts/Caption'
import Lead2 from '../../atoms/texts/Lead2'
import V from '../../atoms/V'
import Gear from '../../icons/Gear'
import SmoothCornerView from '../../nativeModules/SmoothCornerView'
import { RootStackParamList } from '../../navigation/types'
import lightColors from '../../theme/lightColors'
import { Colors } from '../../theme/types'
import { borderRadius, cardHeight, cardWidth } from './constants'
import CreateCard from './CreateCard'

interface Props {
	colors: Colors
	isDark: boolean
	timer?: Timer
	isCreate?: boolean
}

interface Timer {
	rest: number
	lift: number
	name: string
	id: string
}

const TimerCard: React.FC<Props> = ({ colors, isDark, isCreate, timer }) => {
	const nav = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>()
	const action = 'Featered'
	const caption = '4 intervals of 4 mins + warmup and cooldown'
	const createBg = isDark ? colors.lightTransparent80 : colors.primary500
	const normalBg = isDark ? colors.primaryTransparent300 : colors.background
	const borderColor = isDark ? colors.lightTransparent900 : colors.lightTransparent140

	const onPressCreate = () => {
		nav.navigate('ActivityTimerName')
	}

	if (isCreate) {
		return (
			<Pressable onPress={onPressCreate}>
				<CreateCard />
			</Pressable>
		)
	}

	const onPress = () => {
		nav.navigate('EditTimer', { id: timer.id })
	}

	const containerStyle = StyleSheet.flatten([
		styles.container,
		{ backgroundColor: isCreate ? createBg : normalBg },
		isDark && { borderWidth: 1, borderColor },
	])

	return (
		<Pressable onPress={onPress}>
			<SmoothCornerView style={containerStyle}>
				<View style={styles.inner}>
					<CircularShiftTimer dontAnimate size={67} strokeWidth={17} />
					<V flex={1} ml={3}>
						<Action
							fw="Bold"
							color="secundary500"
							darkColor="secundary600"
							style={{ bottom: -1 }}
						>
							{action}
						</Action>
						<Lead2 fw="Fat" italic>
							{timer.name}
						</Lead2>
						<Caption color="grey600" darkColor="secundary900" fw="DemiBold">
							{caption}
						</Caption>
					</V>
				</View>
			</SmoothCornerView>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 9,

		width: cardWidth,
		height: cardHeight,
		borderRadius,

		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.13,
		shadowRadius: 20,
		shadowColor: lightColors.primaryDeath,
		elevation: 4,
	},
	inner: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 18,
		flexDirection: 'row',
	},
})

export default TimerCard
