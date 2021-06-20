import React from 'react'
import Caption from '../../../atoms/texts/Caption'
import { useStrings } from '../../../localization/localizedStrings'

interface Props {
	hasChosenAnnual: boolean
	price: string
}

const Terms = ({ hasChosenAnnual, price }: Props): React.ReactElement => {
	const strings = useStrings().strings.paywall.renewalTerms
	const string = strings.body({
		preText: hasChosenAnnual ? strings.annualPre : strings.monthlyPre,
		price,
	})

	return <Caption lh={20}>{string}</Caption>
}

export default Terms
