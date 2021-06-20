import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../../theme/themeContext'
import { useIsLiftingAnimatedValue } from '../useIsLiftingAnimatedValue'

const BackgroundWrapper: React.FC = ({ children }) => {
	const { colors, isDark } = useTheme()
	const { isLiftingAnimValue } = useIsLiftingAnimatedValue()
	const presets = colorPresets[isDark ? 'dark' : 'light']

	const bgStyle = useAnimatedStyle(() => ({
		backgroundColor: withTiming(
			isLiftingAnimValue.value ? colors[presets.lift] : colors[presets.rest]
		),
	}))

	return (
		<Animated.View style={[styles.wrapper, bgStyle]}>
			<SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
})

const colorPresets = {
	dark: {
		lift: 'primary20',
		rest: 'background',
	},
	light: {
		lift: 'primaryText',
		rest: 'background',
	},
}

export default BackgroundWrapper
