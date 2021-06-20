import React from 'react'
import { useShouldAskForRating } from '../../hooks/useShouldAskForRating'
import { useStrings } from '../../localization/localizedStrings'
import Popup from '../../molecules/popup/Popup'

const AskForRatingModal = (): React.ReactElement => {
	const strings = useStrings().strings.rating
	const { shouldAsk, closeModal, acceptAction, declineAction } = useShouldAskForRating()
	if (!shouldAsk) {
		return null
	}

	return (
		<Popup
			preHeader={strings.preHeader}
			heading={strings.heading}
			body={strings.body}
			buttonGroup={{
				primary: {
					label: strings.primaryLabel,
					onPress: acceptAction,
				},
				secundary: {
					label: strings.secundaryLabel,
					onPress: declineAction,
				},
			}}
			onExit={closeModal}
		/>
	)
}

export default AskForRatingModal
