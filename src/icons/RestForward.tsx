import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import Action from '../atoms/texts/Action'
import { FontWeight } from '../theme/fonts'
import { useTheme } from '../theme/themeContext'
import { SvgPropsWithScale } from './types'

function RestForward({
	scale = 1,
	fill = 'grey600',
	extraData = {},
	...props
}: SvgPropsWithScale): JSX.Element {
	const { seconds, secondsBg = 'background' } = extraData
	const { colors } = useTheme()
	return (
		<View>
			<Svg viewBox="0 0 24 24" width={20 * scale} height={20 * scale} {...props}>
				<Path fill="none" d="M0 0h24v24H0z" />
				<Path
					d="M16 7h-5a6 6 0 100 12h9v2h-9a8 8 0 110-16h5V1l6 5-6 5V7z"
					fill={colors[fill] as string}
				/>
			</Svg>
			{!!seconds && (
				<Action
					color={fill}
					style={[{ backgroundColor: colors[secondsBg] }, styles.seconds]}
				>
					{seconds}
				</Action>
			)}
		</View>
	)
}
const styles = StyleSheet.create({
	seconds: {
		position: 'absolute',
		bottom: -4,
		right: -2,
		fontWeight: FontWeight.DemiBold,
	},
})

export default RestForward
