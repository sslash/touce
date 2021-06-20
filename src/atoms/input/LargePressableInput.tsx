import React, { useRef } from 'react'
import { Pressable, StyleSheet, TextInput, TextInputProps } from 'react-native'
import Animated, {
	Easing,
	useAnimatedProps,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import { FontFamily, FontSize } from '../../theme/fonts'
import { screenHeight } from '../../theme/metrics'
import { useTheme } from '../../theme/themeContext'

const collapsedHeight = 50

const LargePressableInput = ({ onBlur, ...rest }: TextInputProps): JSX.Element => {
	const height = useSharedValue(collapsedHeight)
	const ref = useRef<TextInput>()
	const { colors, isDark } = useTheme()

	const onPress = () => {
		ref?.current?.focus()
	}

	const _onFocus = () => {
		height.value = screenHeight * 0.3
	}

	const _onBlur = () => {
		height.value = collapsedHeight
	}

	const animatedStyle = useAnimatedProps(() => ({
		height: withTiming(height.value, { duration: 250, easing: Easing.bezier(0, 0.5, 1, 0.5) }),
	}))

	const inputStyle = {
		color: colors.primaryText,
	}

	return (
		<Pressable style={styles.pressable} onPress={onPress}>
			<Animated.View style={animatedStyle}>
				<TextInput
					placeholderTextColor={isDark ? colors.grey100 : colors.grey500}
					ref={ref}
					{...rest}
					style={[styles.input, inputStyle]}
					onBlur={_onBlur}
					onFocus={_onFocus}
				/>
			</Animated.View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	pressable: { paddingTop: 10 },
	input: {
		fontFamily: FontFamily.Default,
		fontSize: FontSize.Caption1,
		height: '100%',
	},
})

export default LargePressableInput
