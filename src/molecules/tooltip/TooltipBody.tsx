import React from 'react'
import { View } from 'react-native'
import Body from '../../atoms/texts/Body'
import Title from '../../atoms/texts/Title'

interface Props {
	title: string
	body: string
}

const TooltipBody = ({ title, body }: Props): React.ReactElement => {
	return (
		<View>
			<Title fw="DemiBold" color="primary20" mb={1}>
				{title}
			</Title>
			<Body color="primary50" lh={22}>
				{body}
			</Body>
		</View>
	)
}

export default TooltipBody
