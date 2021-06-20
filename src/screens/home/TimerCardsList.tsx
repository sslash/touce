import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import CardCarousel from '../../atoms/cardCarousel/CardCarousel'
import { cardWidth } from '../../molecules/TimerCard/constants'
import TimerCard from '../../molecules/TimerCard/TimerCard'
import { mainHorizontalMargin } from '../../theme/metrics'
import { useTheme } from '../../theme/themeContext'

const items = [
	{ timer: { id: '117', lift: 300, rest: 210, name: '4x4 intervals' } },
	{ timer: { id: '111', lift: 125, rest: 0, name: 'Strength' } },
	{ isCreate: true },
	{ timer: { id: '112', lift: 300, rest: 200, name: 'Beefcake' } },
	{ timer: { id: '113', lift: 300, rest: 300, name: 'Intervalse' } },
	{ isCreate: true },
]

const TimerCardsList: React.FC = () => {
	const { colors, isDark } = useTheme()

	const renderItem = useCallback((item) => <TimerCard {...{ colors, isDark }} {...item} />, [])

	return (
		<View style={styles.wrapper}>
			<CardCarousel showDots width={cardWidth} data={items} renderItem={renderItem} />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: { marginHorizontal: -mainHorizontalMargin },
})
export default TimerCardsList
