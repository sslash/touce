import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FontWeight } from '../../theme/fonts'
import T from '../texts/T'
import CircularShiftTimer from './CircularShiftTimer'

interface Props {
	label: string
	liftFraction: number
	liftOpacity?: number
	restOpacity?: number
}

const CircularShiftTimerWithLabel = ({
	label,
	liftFraction,
	liftOpacity,
	restOpacity,
}: Props): JSX.Element => {
	return (
		<View>
			<CircularShiftTimer
				dontAnimate
				size={50}
				strokeWidth={8}
				liftFraction={liftFraction}
				{...{ liftOpacity, restOpacity }}
			></CircularShiftTimer>
			<View style={styles.labelWrapper}>
				<T style={styles.label}>{label}</T>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	labelWrapper: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	label: { fontSize: 8, fontWeight: FontWeight.Bold },
})

export default CircularShiftTimerWithLabel
