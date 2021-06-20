import React from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import ScalingTapView from '../../atoms/ScalingTapView'
import Lead from '../../atoms/texts/Lead'
import { Scene } from './types'

interface Props {
	scene: Scene
	isSelectedSharedValue: Animated.SharedValue<boolean>
	onPress: () => void
}

const TabLabelItem = ({ scene, onPress, isSelectedSharedValue }: Props): JSX.Element => {
	const style = useAnimatedStyle(() => {
		return {
			opacity: withTiming(isSelectedSharedValue.value ? 1 : 0.25),
		}
	})

	return (
		<ScalingTapView onPress={onPress}>
			<Animated.View style={style}>
				<Lead fw="Bold" mr={4}>
					{scene.title}
				</Lead>
			</Animated.View>
		</ScalingTapView>
	)
}

export default TabLabelItem
