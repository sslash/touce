import React from 'react'
import { Text } from 'react-native'
import Card from '../atoms/Card'
import Row from '../atoms/Row'
import Body from '../atoms/texts/Body'

interface Props {
	title: string
	body: string
}

const TestamonialCard = ({ title, body }: Props): React.ReactElement => {
	return (
		<Card needsViewWrapping size="small">
			<Row mb={2}>
				<Body fw="Bold" mr={4}>
					{title}
				</Body>
				<Text>⭐️⭐️⭐️⭐️⭐️</Text>
			</Row>
			<Body>{body}</Body>
		</Card>
	)
}

export default TestamonialCard
