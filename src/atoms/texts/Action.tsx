import React from 'react'
import { FontSize } from '../../theme/fonts'
import T, { TProps } from './T'

const Action: React.FC<TProps> = ({ children, style, accessibilityRole = 'text', ...rest }) => {
	return (
		<T style={[style, { fontSize: FontSize.Actions }]} {...{ accessibilityRole }} {...rest}>
			{children}
		</T>
	)
}

export default Action
