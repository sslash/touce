import React from 'react'
import { FontSize } from '../../theme/fonts'
import T, { TProps } from './T'

const Body: React.FC<TProps> = ({ children, style, accessibilityRole = 'text', ...rest }) => {
	return (
		<T style={[style, { fontSize: FontSize.Body }]} {...{ accessibilityRole }} {...rest}>
			{children}
		</T>
	)
}

export default Body
