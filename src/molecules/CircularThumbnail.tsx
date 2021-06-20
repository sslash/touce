import React from 'react'
import { Image, StyleSheet, View, ViewStyle } from 'react-native'
import ScalingTapView from '../atoms/ScalingTapView'
import Caption from '../atoms/texts/Caption'
import Caption2 from '../atoms/texts/Caption2'
import { useTheme } from '../theme/themeContext'

interface Props {
	imageUri: string
	title: string
	subTitle: string
	onPress: () => void
	isSelected?: boolean
	style?: ViewStyle
}

const CircularThumbnail = ({
	imageUri,
	title,
	subTitle,
	isSelected,
	onPress,
	style,
}: Props): JSX.Element => {
	const { colors } = useTheme()
	const selectedStyle = isSelected
		? {
				borderWidth: 3,
				borderColor: colors.primary600,
		  }
		: undefined
	const titleColor = isSelected ? 'primary600' : 'primaryText'
	const subTitleColor = isSelected ? 'primary600' : 'grey600'

	const allStyles = StyleSheet.flatten([styles.container, style])

	return (
		<ScalingTapView style={allStyles} onPress={onPress}>
			<Image source={{ uri: imageUri }} style={[styles.image, selectedStyle]} />
			<View style={styles.text}>
				<Caption2
					mt={2}
					mb={0}
					fw="DemiBold"
					ta="center"
					numberOfLines={1}
					color={titleColor}
				>
					{title}
				</Caption2>
				<Caption2 ta="center" color={subTitleColor}>
					{subTitle}
				</Caption2>
			</View>
		</ScalingTapView>
	)
}

const size = 96
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: size + 14,
		justifyContent: 'center',
	},
	image: {
		width: size,
		height: size,
		borderRadius: size / 2,
	},
	text: {
		width: size,
	},
})

export default CircularThumbnail
