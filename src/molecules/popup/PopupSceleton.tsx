import React, { useLayoutEffect } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Sludge, SludgeVariant } from '../../atoms/sludges'
import { useAfterMount } from '../../hooks/useAfterMount'
import { Icon } from '../../icons'
import SmoothCornerView from '../../nativeModules/SmoothCornerView'
import { mainHorizontalMargin, screenHeight, screenWidth } from '../../theme/metrics'
import { useTheme } from '../../theme/themeContext'

interface Props {
	onExit: () => void
}

const springConfig = {
	damping: 10,
	mass: 0.6,
	stiffness: 100,
	overshootClamping: false,
	restDisplacementThreshold: 0.01,
	restSpeedThreshold: 2,
}

const PopupSceleton: React.FC<Props> = ({ onExit, children }) => {
	const { colors } = useTheme()
	const transY = useSharedValue(screenHeight)

	useAfterMount(() => {
		transY.value = 0
	})

	const style = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: withSpring(transY.value, springConfig) }],
		}
	})

	const popupStyle = StyleSheet.flatten([styles.popup, { backgroundColor: colors.background }])

	return (
		<Modal visible transparent animationType="fade">
			<View style={[styles.backdrop, { backgroundColor: colors.modalBg }]}>
				<Animated.View style={style}>
					<SmoothCornerView style={popupStyle}>
						<View>
							<Sludge variant={SludgeVariant.Dustox} />

							{children}

							<Icon
								pressableProps={{ hitSlop: 'large' }}
								icon="close-outline"
								fill="primaryDeath"
								style={styles.exit}
								onPress={onExit}
								rightAligned
							/>
						</View>
					</SmoothCornerView>
				</Animated.View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	popup: {
		borderRadius: 46,
		width: screenWidth - mainHorizontalMargin * 2,
		overflow: 'hidden',
	},
	exit: { margin: 24 },
	backdrop: {
		flex: 1,

		alignItems: 'center',
		justifyContent: 'center',
	},
})
export default PopupSceleton
