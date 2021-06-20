import React from 'react'
import { View } from 'react-native'
import Row from '../../atoms/Row'
import Caption2 from '../../atoms/texts/Caption2'
import SlidableProgress from './SlidableProgress'

interface Props {
	position: number
	onSlideEnd: (position: number) => void
	leftLabel?: string
	rightLabel?: string
}

const SlidableProgressBar: React.FC<Props> = ({ leftLabel, rightLabel, ...rest }) => {
	return (
		<View>
			<SlidableProgress {...rest} />
			<Row jc="space-between">
				<Caption2>{leftLabel}</Caption2>
				<Caption2>{rightLabel}</Caption2>
			</Row>
		</View>
	)
}

export default SlidableProgressBar
