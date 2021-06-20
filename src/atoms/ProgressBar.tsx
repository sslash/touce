import React from 'react'
import { LayoutChangeEvent, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { borderRadiusScale } from '../theme/metrics'
import { useTheme } from '../theme/themeContext'
import { ColorTypes } from '../theme/types'

interface Props {
	bg: ColorTypes
	progress: number // e.g 0.8
}

const ProgressBar = ({ bg, progress }: Props): JSX.Element => {
	const { colors } = useTheme()
	const max = useSharedValue(0)

	const onLayout = (e: LayoutChangeEvent) => {
		max.value = e.nativeEvent.layout.width
	}

	const widthStyle = useAnimatedStyle(() => ({
		width: withTiming(max.value * progress),
	}))

	const bgStyle = { backgroundColor: colors[bg] }

	return (
		<View style={styles.wrapper} onLayout={onLayout} accessibilityRole="progressbar">
			<View style={{ ...bgStyle, flex: 1, opacity: 0.15 }} />
			<Animated.View style={[styles.inner, { ...bgStyle }, widthStyle]}></Animated.View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		height: 8,
		borderRadius: borderRadiusScale[0],
		width: '100%',
		overflow: 'hidden',
	},
	inner: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
	},
})
export default ProgressBar
