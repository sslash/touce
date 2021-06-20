import differenceInMonths from 'date-fns/differenceInMonths'
import _ from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { useExposedTo } from '../store'
import { showNativeRatingDialog } from '../utils/rate'

interface ReturnProps {
	shouldAsk: boolean
	closeModal: () => void
	acceptAction: () => void
	declineAction: () => void
}

export const useShouldAskForRating = (): ReturnProps => {
	const [shouldAsk, setShouldAsk] = useState(false)
	const hasAskedInSession = useRef(false)
	const exposedTo = useExposedTo()
	const lastDate = exposedTo.lastAskedToRate.date

	useEffect(() => {
		if (hasAskedInSession.current) {
			return
		}
		const hasHydrated = _.isNumber(lastDate)
		if (!hasHydrated) {
			return
		}

		if (!lastDate) {
			return showAskToRate()
		}

		// asked before, but user declined to rate
		if (!exposedTo.lastAskedToRate.didRate) {
			return showAskToRate()
		}

		// if its over 4 month since we last asked, ask again 👹
		if (differenceInMonths(Date.now(), lastDate) >= 4) {
			showAskToRate()
		}
	}, [lastDate])

	const showAskToRate = () => {
		hasAskedInSession.current = true
		setShouldAsk(true)
	}

	const closeModal = () => setShouldAsk(false)

	const acceptAction = () => {
		closeModal()
		void showNativeRatingDialog()
		exposedTo.updateAskedToRate(Date.now(), true)
	}

	const declineAction = () => {
		closeModal()
		exposedTo.updateAskedToRate(Date.now(), false)
	}

	return { shouldAsk, closeModal, acceptAction, declineAction }
}
