import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
	useAnimatedRef,
	useAnimatedScrollHandler,
	useSharedValue,
} from 'react-native-reanimated'
import { useTimeout } from '../hooks/useTimeout'
import { screenWidth } from '../theme/metrics'
import ProgressDots from './ProgressDots'

interface Props {
	itemWidth: number
	children: (args: PositionArg) => JSX.Element
	renderHeader: (args: PositionArg) => JSX.Element
}

type PositionArg = { position: Animated.SharedValue<number>; itemWidth: number }

const contentOffset = {
	x: screenWidth,
	y: 0,
}

const HorizontalScrollView: React.FC<Props> = ({ children, itemWidth, renderHeader }) => {
	const position = useSharedValue(screenWidth)
	const timeout = useTimeout()
	const animatedRef = useAnimatedRef<Animated.ScrollView>()
	const itemLength = 3

	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (e) => {
			position.value = e.contentOffset.x
		},
	})

	React.useLayoutEffect(() => {
		// contentOffset does not work properly on Android,
		// need to scroll to instead
		if (global.IS_ANDROID) {
			timeout.current = setTimeout(() => {
				const node = animatedRef?.current?.getNode()
				node?.scrollTo({ x: screenWidth })
			})
		}
	}, [])

	return (
		<>
			{renderHeader({ position, itemWidth })}
			<Animated.ScrollView
				ref={animatedRef}
				contentOffset={contentOffset}
				horizontal
				scrollEventThrottle={1}
				showsHorizontalScrollIndicator={false}
				snapToInterval={itemWidth}
				disableIntervalMomentum={true}
				decelerationRate={global.ifIos('fast', undefined)}
				overScrollMode="never"
				bounces={false}
				onScroll={scrollHandler}
			>
				{children({ position, itemWidth })}
			</Animated.ScrollView>
			<View style={styles.progressWrapper}>
				<ProgressDots count={itemLength} position={position} itemWidth={itemWidth} />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	progressWrapper: {
		bottom: 30,
		left: 0,
		right: 0,
		top: undefined,
		alignItems: 'center',
		position: 'absolute',
	},
})

export default HorizontalScrollView
