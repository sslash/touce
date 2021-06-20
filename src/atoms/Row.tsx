import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import applySpace from '../theme/spacing'
import { applyVProps, VProps } from './V'

const Row: React.FC<VProps> = ({ children, style: styleProps, ...rest }) => {
	const style = [styles.row, applyVProps(rest), applySpace(rest), styleProps] as ViewStyle

	return <View style={style}>{children}</View>
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
})

export default Row
