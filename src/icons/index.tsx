// https://ionic.io/ionicons
import React from 'react'
import { StyleSheet, TextStyle, View } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import ScalingTapView, { Props as SProps } from '../atoms/ScalingTapView'
import { useTheme } from '../theme/themeContext'
import RestBackwards from './RestBackwards'
import RestForward from './RestForward'
import { SvgPropsWithScale } from './types'

const icons = {
	RestForward,
	RestBackwards,
}

interface Props extends SvgPropsWithScale {
	icon: string
	pressableProps?: SProps
	onPress?: () => void
	rightAligned?: boolean
	width?: number
}

interface IconProps {
	flip?: boolean
}

export const Icon = ({
	icon,
	rightAligned,
	onPress,
	pressableProps = {},
	scale = 1,
	fill = 'primaryText',
	style,
	width = 24,
	...rest
}: Props & IconProps): React.ReactElement => {
	const { colors } = useTheme()
	const LegacyIcon = icons[icon]

	const IconComp = LegacyIcon ? (
		<LegacyIcon {...{ style }} {...rest} {...{ width }} />
	) : (
		<Ionicon
			name={icon}
			size={width * scale}
			color={colors[fill]}
			style={[style, applyIconStyle(rest) as any]}
		/>
	)

	const Comp = onPress ? (
		<ScalingTapView onPress={onPress} {...pressableProps}>
			{IconComp}
		</ScalingTapView>
	) : (
		IconComp
	)

	if (rightAligned) {
		return <View style={styles.rightAligned}>{Comp}</View>
	} else {
		return Comp
	}
}

const styles = StyleSheet.create({
	rightAligned: {
		position: 'absolute',
		right: 0,
	},
})

const applyIconStyle = (props: IconProps): TextStyle | undefined => {
	if (props.flip) {
		return {
			transform: [{ scaleX: -1 }],
		}
	}
}

export type IconKeys = string // TODO get proper types for ionicons

export default icons
