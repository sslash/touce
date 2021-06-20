import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Strings } from '../localization/types'
import { useIsLiftingAnimatedValue } from '../screens/workout/useIsLiftingAnimatedValue'
import { useTheme } from '../theme/themeContext'
import { ColorTypes } from '../theme/types'
import { haptic } from '../utils/haptic'
import Caption from './texts/Caption'

const fullWidth = 240
const fullHeight = 52
const borderRadius = 12
const buttonMargin = borderRadius / 2
const buttonWidth = fullWidth / 2 - buttonMargin * 2
const rightEnd = buttonWidth + buttonMargin * 2 + buttonMargin / 2

interface Props {
	strings: Strings['workout']
}

const ShiftSwitch = ({ strings }: Props): JSX.Element => {
	const { colors, isDark } = useTheme()
	const presets = colorPresets[isDark ? 'dark' : 'light']
	const { isLiftingAnimValue: isLift, forcedShift, isLiftMode } = useIsLiftingAnimatedValue()
	const onPress = () => {
		haptic('impactMedium')
		forcedShift()
	}

	const overlayAnimStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: withTiming(isLift.value ? rightEnd : buttonMargin) }],
			backgroundColor: withTiming(
				isLift.value ? colors[presets.overlay.lift.bg] : colors[presets.overlay.rest.bg]
			),
			borderColor: isLift.value
				? colors[presets.overlay.lift.border]
				: colors[presets.overlay.rest.border],
		}
	})

	const outerStyle = useAnimatedStyle(() => {
		return {
			borderColor: isLift.value
				? colors[presets.background.lift.border]
				: colors[presets.background.rest.border],
		}
	})

	const rowStyle = [
		styles.row,
		{
			backgroundColor: colors[presets.background.bg],
		},
		outerStyle,
	]

	const labelColor = (isLiftMode
		? presets.overlay.lift.label
		: presets.overlay.rest.label) as ColorTypes

	const overlayStyle = [styles.overlay, {}, overlayAnimStyle]

	return (
		<Pressable onPress={onPress} accessibilityRole="switch">
			<Animated.View style={rowStyle}>
				<Animated.View style={overlayStyle}></Animated.View>
				<View style={styles.labelWrapper}>
					<Caption fw="Fat" italic color={labelColor}>
						{strings.podcasts}
					</Caption>
				</View>

				<View style={styles.labelWrapper}>
					<Caption fw="Fat" italic color={labelColor}>
						{strings.music}
					</Caption>
				</View>
			</Animated.View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	labelWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	overlay: {
		position: 'absolute',
		width: buttonWidth,
		height: 38,
		borderRadius: 6,
		borderWidth: 1,
		alignItems: 'center',
	},
	row: {
		width: fullWidth,
		height: fullHeight,
		borderRadius,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
})

const colorPresets = {
	light: {
		overlay: {
			lift: {
				bg: 'lightTransparent140',
				border: 'lightTransparent140',
				label: 'secundary100',
			},
			rest: {
				bg: 'primary100',
				border: 'primaryTransparent200',
				label: 'primary900',
			},
		},
		background: {
			bg: 'primaryTransparent3',
			lift: {
				border: 'lightTransparent140',
			},
			rest: {
				border: 'primaryTransparent200',
			},
		},
	},
	dark: {
		overlay: {
			lift: {
				bg: 'secundary300',
				border: 'lightTransparent900',
				label: 'secundary900',
			},
			rest: {
				bg: 'primaryTransparent600',
				border: 'primaryTransparent200',
				label: 'primary900',
			},
		},
		background: {
			bg: 'secundaryTransparent100',
			lift: {
				border: 'secundaryTransparent400',
			},
			rest: {
				border: 'primaryTransparent300',
			},
		},
	},
}

export default ShiftSwitch
