import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Checkbox from '../../atoms/Checkbox'
import Row from '../../atoms/Row'
import SelectableRow from '../../atoms/SelectableRow'
import Body from '../../atoms/texts/Body'
import Footnote from '../../atoms/texts/Footnote'
import V from '../../atoms/V'

interface Props<T> {
	id: T
	emoji: string
	title: string
	subTitle: string
	setSelected: (id: T) => void
	isSelected: boolean
	testID?: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
const CheckboxRow = <T extends string>({
	title,
	emoji,
	setSelected,
	isSelected,
	subTitle,
	id,
	testID,
}: Props<T>): JSX.Element => {
	const _onSelect = () => setSelected(id)

	return (
		<SelectableRow onPress={_onSelect} {...{ testID, isSelected }}>
			<Row jc="space-between" ai="center">
				<Row ai="center" flex={1}>
					<Text style={styles.emoji}>{emoji}</Text>
					<V ml={4} flex={1}>
						<Body mb={0} fw="DemiBold">
							{title}
						</Body>
						<Footnote color={isSelected ? 'primary600' : 'grey'} fw="Medium">
							{subTitle}
						</Footnote>
					</V>
				</Row>
				<V px={1}>
					<Checkbox isChecked={isSelected} onPress={_onSelect} />
				</V>
			</Row>
		</SelectableRow>
	)
}

const styles = StyleSheet.create({
	emoji: {
		fontSize: 20,
	},
})

export default CheckboxRow
