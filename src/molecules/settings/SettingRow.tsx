import React from 'react'
import { View } from 'react-native'
import Row from '../../atoms/Row'
import Body from '../../atoms/texts/Body'
import Caption2 from '../../atoms/texts/Caption2'
import V from '../../atoms/V'

interface Props {
	body: string
	heading?: string
	ActionComp: JSX.Element
}

const SettingRow = ({ heading, body, ActionComp }: Props): JSX.Element => {
	const isSimple = !heading

	return (
		<Row jc="space-between">
			<View style={{ flexShrink: 1 }}>
				{isSimple ? (
					<Body color="primaryDeath" style={{ flexShrink: 0 }}>
						{body}
					</Body>
				) : (
					<>
						<Body fw="DemiBold">{heading}</Body>
						<Caption2>{body}</Caption2>
					</>
				)}
			</View>
			<V pl={4}>{ActionComp}</V>
		</Row>
	)
}

export default SettingRow
