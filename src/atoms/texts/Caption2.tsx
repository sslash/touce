import React from 'react'
import { FontSize } from '../../theme/fonts'
import T, { TProps } from './T'

const Caption2: React.FC<TProps> = ({
	children,
	style,
	color = 'grey',
	accessibilityRole = 'text',
	...rest
}) => {
	return (
		<T
			style={[style, { fontSize: FontSize.Caption2 }]}
			{...{ accessibilityRole }}
			color={color}
			{...rest}
		>
			{children}
		</T>
	)
}

export default Caption2
