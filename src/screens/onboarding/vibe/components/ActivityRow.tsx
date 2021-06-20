import React from 'react'
import { StyleSheet } from 'react-native'
import Checkbox from '../../../../atoms/Checkbox'
import Row from '../../../../atoms/Row'
import SelectableRow from '../../../../atoms/SelectableRow'
import Body from '../../../../atoms/texts/Body'
import Footnote from '../../../../atoms/texts/Footnote'
import T from '../../../../atoms/texts/T'
import V from '../../../../atoms/V'
import { activityEmojis } from '../../../../data/activities/activities'
import { Activity, ActivityKeys } from '../types'

type Props = {
	id: ActivityKeys
	setSelected: (id: ActivityKeys) => void
	isSelected: boolean
} & Activity

const ActivityRow = ({ title, setSelected, isSelected, subTitle, id }: Props): JSX.Element => {
	const emoji = activityEmojis[id]
	const _onSelect = () => setSelected(id)

	return (
		<SelectableRow onPress={_onSelect} isSelected={isSelected}>
			<Row jc="space-between" ai="center">
				<Row ai="center">
					<T style={styles.emoji}>{emoji}</T>
					<V ml={4}>
						<Body mb={0} fw="DemiBold">
							{title}
						</Body>
						<Footnote color={isSelected ? 'primary600' : 'grey'} fw="Medium">
							{subTitle}
						</Footnote>
					</V>
				</Row>
				<Checkbox isChecked={isSelected} onPress={_onSelect} />
			</Row>
		</SelectableRow>
	)
}

const styles = StyleSheet.create({
	emoji: {
		fontSize: 20,
	},
})

export default ActivityRow
