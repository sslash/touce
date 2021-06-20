import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import FastImage, { Source } from 'react-native-fast-image'
import Separator from '../../atoms/Separator'
import V from '../../atoms/V'

interface Props {
	hasBorder?: boolean
	source: Source
	style: ViewStyle
}

const MusicSourceItem = ({ hasBorder, source, style }: Props): JSX.Element => {
	return (
		<>
			{hasBorder && <Separator />}
			<V ai="center" style={style}>
				<FastImage source={source} style={styles.image} resizeMode="contain" />
			</V>
			{hasBorder && <Separator />}
		</>
	)
}

const styles = StyleSheet.create({
	image: { width: 130 },
})

export default MusicSourceItem
