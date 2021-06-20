import React from 'react'
import { StyleSheet } from 'react-native'
import { FontSize } from '../../theme/fonts'
import T, { TProps } from './T'

const Lead2: React.FC<TProps> = ({
	children,
	style: styleProps,
	accessibilityRole = 'header',
	...rest
}): JSX.Element => {
	return (
		<T style={[styles.text, styleProps]} {...{ accessibilityRole }} fw="Bold" {...rest}>
			{children}
		</T>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: FontSize.Lead2,
	},
})

export default Lead2
