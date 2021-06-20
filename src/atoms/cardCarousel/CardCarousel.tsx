import React, { useEffect, useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { mainHorizontalMargin } from '../../theme/metrics'
import FancyProgressDots from './FancyProgressDots'

interface Props<T> {
	data: T[]
	showDots?: boolean
	width: number
	renderItem: (item: T) => JSX.Element
}

const extraSpace = mainHorizontalMargin * 0.6
const SPACING_FOR_CARD_INSET = mainHorizontalMargin / 2

function CardCarousel<T>({ data, renderItem, showDots, width }: Props<T>): JSX.Element {
	const scrollRef = useRef<ScrollView>()
	const x = useSharedValue(0)

	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (e) => {
			x.value = e.contentOffset.x
		},
	})

	// fix for contentInset bug
	useEffect(() => {
		if (global.IS_IOS) {
			scrollRef.current?.scrollTo({ animated: false, x: -SPACING_FOR_CARD_INSET })
		}
	}, [])

	const itemsCount = data.length
	const cardMargin = extraSpace / 2
	const contentInsetsIos = {
		top: 0,
		left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
		bottom: 0,
		right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
	}

	const contentContainerStyleAndroid = {
		paddingHorizontal: global.IS_ANDROID ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
	}

	return (
		<View style={{ width: '100%' }}>
			<Animated.ScrollView
				ref={scrollRef as any}
				automaticallyAdjustContentInsets={true}
				horizontal
				style={{ overflow: 'visible' }}
				snapToInterval={width + extraSpace} // Calculate the size for a card including marginLeft and marginRight
				snapToAlignment="center"
				pagingEnabled
				decelerationRate={0}
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={16}
				contentInset={contentInsetsIos}
				contentContainerStyle={contentContainerStyleAndroid}
				onScroll={scrollHandler}
			>
				{data.map((item, i) => (
					<View key={i} style={{ width, margin: cardMargin }}>
						{renderItem(item)}
					</View>
				))}
			</Animated.ScrollView>
			{showDots && (
				<View style={styles.progressWrapper}>
					<FancyProgressDots {...{ x, width }} numberOfDots={itemsCount} />
				</View>
			)}
		</View>
	)
}

export default CardCarousel

const styles = StyleSheet.create({
	progressWrapper: {
		alignItems: 'center',
		marginTop: 16,
		marginBottom: 32,
	},
})
