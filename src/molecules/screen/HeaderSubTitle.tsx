import React from 'react'
import Secundary from '../../atoms/texts/Secundary'
import { ScreenProps } from './screenConfig'

const HeaderSubTitle = ({
	headerSubTitle,
}: {
	headerSubTitle: ScreenProps['headerSubTitle']
}): JSX.Element => {
	if (typeof headerSubTitle === 'string') {
		return <Secundary color="primaryDeath">{headerSubTitle}</Secundary>
	} else {
		return headerSubTitle
	}
}

export default HeaderSubTitle
