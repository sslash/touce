import React from 'react'
import { View } from 'react-native'
import ProgressBar from '../../atoms/ProgressBar'
import Row from '../../atoms/Row'
import Title from '../../atoms/texts/Title'
import Thumbnail from '../../atoms/Thumbnail'

interface Props {
	shiftMode: ShiftMode
}

const MediaDurationRow = ({ shiftMode }: Props): JSX.Element => {
	const bg = shiftMode === 'lift' ? 'primary500' : 'secundary500'
	const duration = '23:32' // TODO CONTINUE
	const uri =
		'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'

	return (
		<View>
			<Row jc="space-between" mb={2}>
				<Title fw="Bold">{duration}</Title>
				<Thumbnail source={{ uri }} size="small" variant="bordered" />
			</Row>
			<ProgressBar bg={bg} progress={0.4} />
		</View>
	)
}

export default MediaDurationRow
