import React from 'react'
import { StyleSheet, View } from 'react-native'
import Row from '../../atoms/Row'
import Separator from '../../atoms/Separator'
import Caption2 from '../../atoms/texts/Caption2'
import Secundary from '../../atoms/texts/Secundary'
import { useStrings } from '../../localization/localizedStrings'

interface Props {
	positionPreset: 'first' | 'mid' | 'last'
	label: string
	value: string
}

const StatItem = ({ positionPreset, label, value }: Props): JSX.Element => {
	const showSeparator = ['first', 'mid'].includes(positionPreset)
	const strings = useStrings().strings.statsItems

	return (
		<Row ai="center">
			<View style={[positionStyles[positionPreset]]}>
				<Caption2 color="grey500" mb={1}>
					{strings[label]}
				</Caption2>
				<Secundary color="primary500" fw="DemiBold">
					{value}
				</Secundary>
			</View>
			{showSeparator && <Separator isHorizontal={false} color="grey300" length={20} />}
		</Row>
	)
}

const positionStyles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles
	first: {
		paddingRight: 15,
	},
	// eslint-disable-next-line react-native/no-unused-styles
	mid: {
		paddingHorizontal: 15,
	},
	// eslint-disable-next-line react-native/no-unused-styles
	last: {
		paddingLeft: 15,
	},
})

export default StatItem
