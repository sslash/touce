import React from 'react'
import { StyleSheet, View } from 'react-native'
import lightColors from '../theme/lightColors'
import { borderRadiusScale } from '../theme/metrics'
import FastImage from 'react-native-fast-image'

interface Props {
	uri: string
}

const ShinyImage: React.FC<Props> = ({ uri }) => {
	return (
		<View style={styles.shadow1}>
			<View style={styles.shadow2}>
				<FastImage source={{ uri }} style={styles.image} resizeMode="cover" />
			</View>
		</View>
	)
}

const size = 235
const borderRadius = borderRadiusScale[2]

const styles = StyleSheet.create({
	image: {
		width: size,
		height: size,
		borderRadius,
	},
	shadow1: {
		width: size,
		height: size,
		borderRadius,
		backgroundColor: lightColors.grey300,
		marginTop: 42,
		marginBottom: 32,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.15,
		shadowRadius: 15,
		shadowColor: lightColors.primaryDeath,
	},
	shadow2: {
		width: size,
		height: size,
		borderRadius,
		backgroundColor: lightColors.grey300,
		shadowOffset: {
			width: 1,
			height: 4,
		},
		shadowOpacity: 0.2,
		shadowRadius: 35,
		shadowColor: lightColors.primaryDeath,
	},
})

export default ShinyImage
