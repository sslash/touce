import React from 'react'
import { Image, StyleSheet, View, ViewStyle } from 'react-native'
import ScalingTapView from '../atoms/ScalingTapView'
import { shiftCard } from '../images'
import SmoothCornerView from '../nativeModules/SmoothCornerView'
import lightColors from '../theme/lightColors'
import { useTheme } from '../theme/themeContext'
import GlassmorphismCard from './GlassmorphismCard'
import { borderRadius, cardHeight, cardWidth } from './TimerCard/constants'

interface Props {
	size?: 'card' | 'scalable'
	onPress?: () => void
}

const FancyBrandCard: React.FC<Props> = ({
	children,
	size = 'card',
	onPress,
}): React.ReactElement => {
	const { getColor } = useTheme()
	const backgroundColor = getColor('primary500', 'lightTransparent80')

	const containerStyle = StyleSheet.flatten([
		styles.container,
		{ backgroundColor, ...sizePresets[size] },
	]) as ViewStyle

	return (
		<ScalingTapView {...{ onPress }}>
			<SmoothCornerView style={containerStyle} needsViewWrapping>
				<Image source={shiftCard} style={styles.createCard} resizeMode="cover" />
				<View style={styles.glassWrapper}>
					<GlassmorphismCard style={styles.glass}>{children}</GlassmorphismCard>
				</View>
			</SmoothCornerView>
		</ScalingTapView>
	)
}

const styles = StyleSheet.create({
	createCard: {
		alignSelf: 'center',
		height: '100%',
		width: '100%',
		borderRadius: borderRadius / 1.25,
	},
	glassWrapper: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 12 },

	container: {
		marginHorizontal: 9,

		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.13,
		shadowRadius: 20,
		shadowColor: lightColors.primaryDeath,
		elevation: 4,
	},

	glass: { borderRadius: borderRadius / 1.25, padding: 18 },
})

const sizePresets = {
	card: {
		width: cardWidth,
		height: cardHeight,
		borderRadius,
	},
	scalable: {
		width: '100%',
		height: cardHeight,
		borderRadius,
	},
}

export default FancyBrandCard
