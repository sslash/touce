import React from 'react'
import { StyleSheet, View } from 'react-native'
import Caption2 from '../../atoms/texts/Caption2'
import Title from '../../atoms/texts/Title'
import { Icon } from '../../icons'
import FancyBrandCard from '../FancyBrandCard'

const CreateCard = (): JSX.Element => {
	const createNew = 'Create new'
	const customTimer = 'Custom timer'

	return (
		<FancyBrandCard>
			<View style={styles.row}>
				<View>
					<Caption2 color="lightTransparent600" darkColor="lightTransparent800" mb={0}>
						{createNew}
					</Caption2>
					<Title fw="Bold" color="noModeLight">
						{customTimer}
					</Title>
				</View>
				<Icon icon="add-circle-outline" fill="noModeLight" />
			</View>
		</FancyBrandCard>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center',
	},
})
export default CreateCard
