import React from 'react'
import { StyleSheet } from 'react-native'
import { ColorTypes } from '../theme/types'
import Bg from './Bg'
import Caption2 from './texts/Caption2'

interface Props {
	label: string
	color?: ColorTypes
}

const Badge = ({ label, color = 'primaryTransparent600' }: Props): JSX.Element => {
	return (
		<Bg style={styles.badge} bg="backgroundTransparent400" borderColor="lightTransparent600">
			<Caption2 color={color} fw="Bold">
				{label}
			</Caption2>
		</Bg>
	)
}

const height = 30
const styles = StyleSheet.create({
	badge: {
		height,
		borderRadius: height,
		borderWidth: 1,
		paddingHorizontal: 14,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default Badge
