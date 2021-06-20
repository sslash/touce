import { Strings } from '../../../../localization/types'

export interface RowType {
	strings: Strings['workout']['settings']
	isLast?: boolean
	isRest?: boolean
}
