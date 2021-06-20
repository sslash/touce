import React, { useState } from 'react'
import { Pressable } from 'react-native'
import Card, { CardVariant } from '../../atoms/Card'
import Checkbox, { Variant } from '../../atoms/Checkbox'
import Row from '../../atoms/Row'
import Body from '../../atoms/texts/Body'
import Footnote from '../../atoms/texts/Footnote'
import T from '../../atoms/texts/T'
import V from '../../atoms/V'
import { haptic } from '../../utils/haptic'

const AdvancedHiitBox = (): React.ReactElement => {
	const [isChecked, setIsChecked] = useState(false)
	const title = 'Advanced hiit timer?'
	const subTitle = 'Add custom timer rounds'

	const onPress = () => {
		haptic('impactMedium')
		setIsChecked((v) => !v)
	}

	return (
		<Pressable {...{ onPress }}>
			<Card variant={CardVariant.Outline} mb={6} size="small">
				<Row ai="center">
					<T style={{ fontSize: 24 }}>⚡️</T>
					<V ml={3} flex={1}>
						<Body fw="DemiBold">{title}</Body>
						<Footnote>{subTitle}</Footnote>
					</V>
					<Checkbox variant={Variant.Outline} {...{ isChecked, onPress }} />
				</Row>
			</Card>
		</Pressable>
	)
}

export default AdvancedHiitBox
