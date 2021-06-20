import React from 'react'
import Bg from '../../../atoms/Bg'
import Body from '../../../atoms/texts/Body'
import { Strings } from '../../../localization/types'
import { PurchaseErrors } from '../../../store/purchase/types'

interface Props {
	errorCode: PurchaseErrors
	strings: Strings['paywall']
}

const ErrorMessage = ({ errorCode, strings }: Props): React.ReactElement => {
	if (!errorCode) {
		return null
	}

	return (
		<Bg bg="background" ai="center" py={4}>
			<Body color="error" fw="DemiBold" ta="center">
				{strings.errors[errorCode]}
			</Body>
		</Bg>
	)
}

export default ErrorMessage
