import React from 'react'
import Lead from '../../atoms/texts/Lead'
import { ScreenProps } from './screenConfig'

const HeaderTitle = ({ headerTitle }: { headerTitle: ScreenProps['headerTitle'] }): JSX.Element => {
	if (typeof headerTitle === 'string') {
		return <Lead fw="Bold">{headerTitle}</Lead>
	} else {
		return headerTitle
	}
}

export default HeaderTitle
