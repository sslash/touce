import { SvgProps } from 'react-native-svg'
import { ColorTypes } from '../theme/types'

export type SvgPropsWithScale = SvgProps & {
	scale?: number
	fill?: ColorTypes
	stroke?: ColorTypes
	extraData?: ExtraData
}

interface ExtraData {
	seconds?: number
	secondsBg?: ColorTypes
}
