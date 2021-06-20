import React, { useState } from 'react'
import { View } from 'react-native'
import BigIconButton from '../../atoms/BigIconButton'
import Row from '../../atoms/Row'
import Caption from '../../atoms/texts/Caption'
import V from '../../atoms/V'
import { useStrings } from '../../localization/localizedStrings'

const feels = [
	{ value: 3, emoji: '😖' },
	{ value: 2, emoji: '🙂' },
	{ value: 1, emoji: '😃' },
]

const FeelsBox = (): JSX.Element => {
	const [selected, setSelectedIdx] = useState<number>(null)
	const strings = useStrings().strings.workoutFinished

	return (
		<View>
			<Caption mb={3} color="grey500">
				{strings.feels}
			</Caption>
			<Row>
				{feels.map((f, i) => (
					<V key={f.value} mr={5}>
						<BigIconButton
							emoji={f.emoji}
							onPress={() => setSelectedIdx(i)}
							isOn={selected === i}
						/>
					</V>
				))}
			</Row>
		</View>
	)
}

export default FeelsBox
