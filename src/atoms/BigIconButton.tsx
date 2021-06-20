import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Icon, IconKeys } from '../icons'
import SmoothCornerView from '../nativeModules/SmoothCornerView'
import { useTheme } from '../theme/themeContext'
import ScalingTapView from './ScalingTapView'
import V from './V'

interface Props {
	emoji?: string
	icon?: IconKeys
	isOn?: boolean
	onPress: () => void
}

const BigIconButton = ({ emoji, icon, isOn, onPress }: Props): JSX.Element => {
	const isOnValue = useSharedValue(isOn)
	const { colors } = useTheme()

	useEffect(() => {
		isOnValue.value = isOn
	}, [isOn])

	const style = useAnimatedStyle(() => ({
		transform: [{ translateY: withTiming(isOn ? 0 : size) }],
		backgroundColor: colors.primary50,
	}))

	const borderStyle = { borderColor: colors.primaryTransparent200 }

	return (
		<ScalingTapView {...{ onPress }} hasHaptic>
			<SmoothCornerView style={StyleSheet.flatten([styles.container, borderStyle])}>
				<View style={{ flex: 1 }}>
					<Animated.View style={[styles.overlay, style]} />
					<V jc="center" ai="center" flex={1}>
						{!!icon && <Icon icon={icon} />}
						{!!emoji && <Text>{emoji}</Text>}
					</V>
				</View>
			</SmoothCornerView>
		</ScalingTapView>
	)
}

const size = 55

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		width: size,
		height: size,
		borderRadius: size / 4,
		overflow: 'hidden',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: size,
		height: size,
	},
})

export default BigIconButton
