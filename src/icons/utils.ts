import { ColorTypes } from './../theme/types'
import { useTheme } from '../theme/themeContext'

export const useColor = (fill: ColorTypes): string => {
	return useTheme().colors[fill]
}
