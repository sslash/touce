import React from 'react'
import { StyleSheet, TextInputProps } from 'react-native'
import Input from './Input'

interface Props extends TextInputProps {
	isError?: boolean
}

const DigitInput = (props: Props): JSX.Element => {
	return (
		<Input
			{...props}
			maxLength={4}
			style={styles.input}
			wrapperStyle={styles.wrapper}
			keyboardType="number-pad"
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		height: 32,

		fontSize: 28,
	},
	wrapper: {
		height: 70,
		width: 145,
	},
})

export default DigitInput
