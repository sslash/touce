import React, { useEffect, useRef } from 'react'
import { Pressable, StyleSheet, TextInput, TextInputProps, ViewStyle } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { FontFamily, FontSize, FontWeight } from '../../theme/fonts'
import { borderRadiusScale } from '../../theme/metrics'
import { useTheme } from '../../theme/themeContext'

interface Props extends TextInputProps {
	isError?: boolean
	wrapperStyle?: ViewStyle
}

const Input = ({ isError, onChangeText, wrapperStyle, style, ...rest }: Props): JSX.Element => {
	const ref = useRef<TextInput>()
	const { colors, isDark: isDark } = useTheme()
	const defaultColor = colors.primaryTransparent200
	const initialBorderColor = isError ? colors.error : defaultColor
	const borderColor = useSharedValue(initialBorderColor)

	const animStyle = useAnimatedStyle(() => {
		return {
			borderColor: withTiming(borderColor.value),
			backgroundColor: isDark ? colors.primary75 : undefined,
		}
	})

	useEffect(() => {
		if (isError) {
			borderColor.value = colors.error
		}
	}, [isError])

	const onFocus = () => {
		borderColor.value = colors.primaryTransparent500
	}

	const onBlur = () => {
		borderColor.value = defaultColor
	}

	const onPress = () => {
		ref.current.focus()
	}

	return (
		<Pressable onPress={onPress}>
			<Animated.View style={[styles.inputWrapper, animStyle, wrapperStyle]}>
				<TextInput
					ref={ref}
					onChangeText={onChangeText}
					selectionColor={colors.primary600}
					placeholderTextColor={isDark ? colors.grey500 : colors.grey200}
					style={[styles.input, { color: colors.primaryText }, style]}
					{...{ onFocus, onBlur }}
					{...rest}
				/>
			</Animated.View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	inputWrapper: {
		borderRadius: borderRadiusScale[4],
		borderWidth: 1,
		height: 64,
		justifyContent: 'center',
		paddingHorizontal: 24,
	},
	input: {
		height: 24,
		fontFamily: FontFamily.Default,
		fontSize: FontSize.Secundary,
		fontWeight: FontWeight.Bold,
	},
})

export default Input
