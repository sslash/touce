import React from 'react'
import { FontSize } from '../../theme/fonts'
import T, { TProps } from './T'

const Secundary: React.FC<TProps> = ({ children, style, accessibilityRole = 'text', ...rest }) => {
	return (
		<T style={[style, { fontSize: FontSize.Secundary }]} {...{ accessibilityRole }} {...rest}>
			{children}
		</T>
	)
}

export default Secundary
