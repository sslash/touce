import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useBottomNotchSpace } from '../hooks/useSafeAreaStyle'
import { mainHorizontalMargin } from '../theme/metrics'
import { ColorTypes } from '../theme/types'
import LinearGradientBackground from './LinearGradientBg'

interface Props {
	variant?: 'default' | 'full'
	gradientScale?: 'default' | 'strong'
}

const FadedOverlayFooter: React.FC<Props> = ({
	children,
	variant = 'default',
	gradientScale = 'default',
}): JSX.Element => {
	const paddingBottom = useBottomNotchSpace()

	const inner =
		variant === 'default' ? (
			<SafeAreaView>
				<View style={styles.default}>{children}</View>
			</SafeAreaView>
		) : (
			children
		)

	return (
		<LinearGradientBackground
			gradients={gradientPresets[gradientScale]}
			style={[styles.container, { paddingBottom }]}
		>
			{inner}
		</LinearGradientBackground>
	)
}

const gradientPresets: Record<string, ColorTypes[]> = {
	default: ['backgroundTransparent0', 'backgroundTransparent1000'],
	strong: ['backgroundTransparent400', 'backgroundTransparent1000'],
}

const styles = StyleSheet.create({
	default: { marginHorizontal: mainHorizontalMargin },
	container: {
		alignItems: null,
		bottom: 0,
	},
})

export default FadedOverlayFooter
