import React from 'react'
import { FontSize } from '../../theme/fonts'
import T, { TProps } from './T'

const Caption: React.FC<TProps> = ({ children, style, accessibilityRole = 'text', ...rest }) => {
	return (
		<T
			style={[{ fontSize: FontSize.Footnote }, style]}
			{...{ accessibilityRole }}
			color="grey"
			{...rest}
		>
			{children}
		</T>
	)
}

export default Caption
