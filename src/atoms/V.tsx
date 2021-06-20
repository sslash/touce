import React from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'
import { mainHorizontalMargin } from '../theme/metrics'
import applySpace, { SpaceProps } from '../theme/spacing'

export type VProps = ViewProps &
	SpaceProps & {
		width?: ViewStyle['width']
		height?: ViewStyle['height']
		as?: ViewStyle['alignSelf']
		ai?: ViewStyle['alignItems']
		jc?: ViewStyle['justifyContent']
		flex?: ViewStyle['flex']
		fg?: ViewStyle['flexGrow']
		mhm?: boolean
		abs?: boolean
	}

const V: React.FC<VProps> = ({ children, style, ...rest }) => {
	return (
		<View {...rest} style={[applyVProps(rest), applySpace(rest), style]}>
			{children}
		</View>
	)
}

export const applyVProps = ({
	width,
	as,
	jc,
	ai,
	flex,
	fg,
	height,
	mhm,
	abs,
}: VProps): ViewStyle => {
	return {
		width,
		alignSelf: as,
		alignItems: ai,
		justifyContent: jc,
		flex,
		flexGrow: fg,
		height,
		paddingHorizontal: mhm ? mainHorizontalMargin : undefined,
		position: abs ? 'absolute' : undefined,
	}
}

export default V
