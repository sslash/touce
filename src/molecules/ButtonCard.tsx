import React from 'react'
import { View } from 'react-native'
import Button, { ButtonVariant } from '../atoms/Button'
import Card from '../atoms/Card'
import Body from '../atoms/texts/Body'

interface Props {
	ctaText: string
	title: string
	onPress: () => void
}

const ButtonCard: React.FC<Props> = ({ ctaText, title, onPress }) => {
	return (
		<Card size="small" needsViewWrapping>
			<View>
				<Body color="primaryDeath" mb={4}>
					{title}
				</Body>

				<Button variant={ButtonVariant.Outline} {...{ onPress }} size="small">
					{ctaText}
				</Button>
			</View>
		</Card>
	)
}

export default ButtonCard
