import React, { useEffect, useRef } from 'react'
import { TextStyle, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import ScalingTapView from '../../atoms/ScalingTapView'
import Caption from '../../atoms/texts/Caption'
import Lead from '../../atoms/texts/Lead'
import { mainHorizontalMargin } from '../../theme/metrics'
import { HeaderVariant, Scene } from './types'

interface Props<T> {
	scene: Scene<T>
	index: number
	currentIdx: number
	setCurrentIdx: (index: number) => void
	headerVariant: HeaderVariant
	tabFontStyle?: TextStyle
	onMeasure?: (r: React.RefObject<View>, index: number) => void
}

function TabItem<T>({
	scene,
	index,
	headerVariant,
	currentIdx,
	setCurrentIdx,
	onMeasure,
	tabFontStyle,
}: Props<T>): JSX.Element {
	const ref = useRef<Animated.View>()
	const isSelected = index === currentIdx
	const isSelectedSharedValue = useSharedValue(isSelected)
	const isLevel1 = headerVariant === 'level1'

	useEffect(() => {
		isSelectedSharedValue.value = index === currentIdx
	}, [currentIdx, index])

	const onPress = () => {
		setCurrentIdx(index)
	}

	const style = useAnimatedStyle(() => {
		return {
			opacity: withTiming(isSelectedSharedValue.value ? 1 : 0.25),
			marginRight: mainHorizontalMargin * (isLevel1 ? 1 : 1.2),
		}
	})

	const onLayout = () => {
		if (onMeasure) {
			onMeasure((ref as any) as React.RefObject<View>, index)
		}
	}

	const FontComp = isLevel1 ? Lead : Caption

	return (
		<ScalingTapView onPress={onPress} hasHaptic hitSlop={'medium'}>
			<Animated.View style={style} ref={ref} onLayout={onLayout}>
				<FontComp fw="Bold" color="primaryText" style={tabFontStyle}>
					{scene.title}
				</FontComp>
			</Animated.View>
		</ScalingTapView>
	)
}

export default TabItem
