import React from 'react'
import Body from '../../atoms/texts/Body'
import V, { VProps } from '../../atoms/V'
import Popup, { PopupProps } from '../popup/Popup'

interface Props extends VProps {
	errorLabel?: string
	dialogError?: PopupProps
}

const SettingError = ({ errorLabel, dialogError, ...vProps }: Props): React.ReactElement => {
	return (
		<V pt={2} {...vProps}>
			{!!errorLabel && (
				<Body color="error" fw="DemiBold">
					{errorLabel}
				</Body>
			)}
			{!!dialogError && <Popup {...dialogError} />}
		</V>
	)
}

export default SettingError
