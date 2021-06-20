import React from 'react'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'
import SlideIn from '../../animations/SlideIn'
import TooltipUI, { Props as UIProps } from './TooltipUI'

interface Props extends UIProps {
	onPress: () => void
	wrapperStyle?: ViewStyle
	yPosition?: 'top' | 'bottom'
}

const Tooltip: React.FC<Props> = ({
	children,
	yPosition = 'top',
	wrapperStyle = styles.defaultWrapper,
	onPress,
	...rest
}) => {
	if (yPosition === 'top') {
		return (
			<Pressable style={wrapperStyle} {...{ onPress }}>
				<TooltipUI {...rest} />
				{children}
			</Pressable>
		)
	}

	return (
		<Pressable style={styles.bottomWrapper} {...{ onPress }}>
			{children}
			<SlideIn style={wrapperStyle}>
				<TooltipUI {...rest} />
			</SlideIn>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	bottomWrapper: { alignItems: 'center' },
	defaultWrapper: {
		width: 320,
		alignItems: 'center',
	},
})

export default Tooltip
