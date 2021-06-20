import React from 'react'
import V from '../../../../atoms/V'
import { IconKeys } from '../../../../icons'
import ExpandableIconRow from '../../../../molecules/iconRowAction/ExpandableIconRow'

interface Props {
	icon: IconKeys
	label: string
	isLast?: boolean
	onPress?: () => void
}

const SettingRowWrapper: React.FC<Props> = ({ icon, label, children, isLast, onPress }) => {
	return (
		<ExpandableIconRow {...{ isLast, label, icon, onPress }}>
			<V pt={5} pb={3}>
				{children}
			</V>
		</ExpandableIconRow>
	)
}

export default SettingRowWrapper
