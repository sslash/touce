import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'

interface Props extends ViewProps {
	y?: ViewStyle['width']
	x?: ViewStyle['height']
}

const Spacer = ({ y, x = '100%' }: Props): JSX.Element => {
	return <View style={{ width: x, height: y }}></View>
}

export default Spacer
