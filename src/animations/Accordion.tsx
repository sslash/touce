import React, { useRef } from 'react'
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import ScalingTapView from '../atoms/ScalingTapView'

interface Props {
	StickyContent: React.ComponentType<{ isExpanded: Animated.SharedValue<boolean> }>
	ExpandableContent: React.ReactNode
	containerStyle?: ViewStyle
}

const Accordion = ({ StickyContent, ExpandableContent, containerStyle }: Props): JSX.Element => {
	const isExpanded = useSharedValue(false)
	const height = useSharedValue(0)
	const expandableHeight = useRef<number>(undefined)

	const toggleExpand = () => {
		height.value = isExpanded.value ? 0 : expandableHeight.current
		isExpanded.value = !isExpanded.value
	}

	const onExpandableLayout = (e: LayoutChangeEvent) => {
		expandableHeight.current = e.nativeEvent.layout.height
	}

	const style = useAnimatedStyle(() => {
		return {
			height: withTiming(height.value, { duration: 200 }),
		}
	})

	return (
		<View style={containerStyle}>
			<ScalingTapView onPress={toggleExpand}>
				<StickyContent {...{ isExpanded }} />
			</ScalingTapView>

			<Animated.View style={[styles.container, style]}>
				<View onLayout={onExpandableLayout}>{ExpandableContent}</View>
			</Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		overflow: 'scroll',
	},
})
export default Accordion
