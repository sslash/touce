import { BlurView } from '@react-native-community/blur'
import React from 'react'
import { View } from 'react-native'
import { StyleSheet, ViewStyle } from 'react-native'
import { borderRadiusScale } from '../theme/metrics'

interface Props {
	style?: ViewStyle
}

const GlassmorphismCard: React.FC<Props> = ({ children, style }): JSX.Element => {
	if (global.IS_IOS) {
		return (
			<BlurView
				style={StyleSheet.flatten([styles.card, style])}
				blurType="ultraThinMaterialDark"
				blurAmount={15}
				reducedTransparencyFallbackColor="white"
			>
				{children}
			</BlurView>
		)
	} else {
		return <View style={[styles.card, styles.androidCard, style]}>{children}</View>
	}
}

const styles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-color-literals
	card: {
		backgroundColor: 'rgba(255,255,255,0.1)',
		borderWidth: 1,
		borderColor: 'rgba(255,255,255,0.2)',
	},

	// eslint-disable-next-line react-native/no-color-literals
	androidCard: {
		borderRadius: borderRadiusScale[0],
		backgroundColor: 'rgba(255,255,255,0.2)',
	},
})

export default GlassmorphismCard
