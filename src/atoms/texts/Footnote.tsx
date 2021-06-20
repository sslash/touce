import React from 'react'
import { FontSize } from '../../theme/fonts'
import T, { TProps } from './T'

const Footnote: React.FC<TProps> = ({ children, style, accessibilityRole = 'text', ...rest }) => {
	return (
		<T
			style={[style, { fontSize: FontSize.Footnote }]}
			{...{ accessibilityRole }}
			color="grey"
			{...rest}
		>
			{children}
		</T>
	)
}

export default Footnote
