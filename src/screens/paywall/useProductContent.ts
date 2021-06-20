import { useStrings } from '../../localization/localizedStrings'
import { PaywallHeadingProps, ProductStringsReturnType } from '../../localization/sharedTypes'
import { Strings } from '../../localization/types'
import { PurchaseState } from '../../store/purchase/types'
import {
	getAnnual,
	getIsFirstWeekFree,
	getMonthly,
	getSavingsForAnnual,
} from '../../store/purchase/utils'

interface Props {
	offerings: PurchaseState['offerings']
	isFetchingOfferings: boolean
	hasChosenAnnual: boolean
	isVariationA: boolean
}

interface ReturnType {
	heading: JSX.Element | string
	strings: Strings['paywall']
	productStrings: ProductStringsReturnType
	savingsForAnnual: number
	purchaseString: string
}

const defaultProps = {
	productStrings: null,
	savingsForAnnual: 0,
	purchaseString: null,
}

export const useProductContent = ({
	offerings,
	isFetchingOfferings,
	hasChosenAnnual,
	isVariationA,
}: Props): ReturnType => {
	const strings = useStrings().strings.paywall
	if (isFetchingOfferings) {
		return { heading: strings.loading, strings, ...defaultProps }
	}

	if (!offerings?.current) {
		return {
			heading: strings.fetchError,
			strings,
			...defaultProps,
		}
	}

	const annual = getAnnual(offerings).product
	const monthly = getMonthly(offerings).product

	const isFirstWeekFree = hasChosenAnnual && getIsFirstWeekFree(annual)
	const perMonthAnnual = `${(annual.price / 12).toFixed(2)} ${annual.currency_code}`

	const productStrings = strings.productStrings({
		annual,
		monthly,
		isFirstWeekFree,
		perMonthAnnual,
	})

	const headingProps: PaywallHeadingProps = {
		price: hasChosenAnnual ? annual?.price_string : monthly?.price_string,
		isOffer: isFirstWeekFree,
		tProps: { fw: 'Bold' },
		highlightProps: { color: 'primary600' },
	}
	const heading = isVariationA ? strings.a.heading(headingProps) : strings.b.heading(headingProps)

	return {
		heading,
		strings,
		productStrings,
		savingsForAnnual: getSavingsForAnnual(annual.price, monthly.price),
		purchaseString: productStrings.purchaseString,
	}
}
