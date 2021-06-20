import { PurchasesProduct } from 'react-native-purchases'
import { TProps } from './../atoms/texts/T'

export interface TAndCProps extends TProps {
	onTermsPress: () => void
	onPrivacyPress: () => void
}

export interface PaywallHeadingProps {
	price: string
	isOffer: boolean
	tProps: TProps
	highlightProps: TProps
}

export interface RenewProps {
	preText: string
	price: string
}

export interface ProductStringsArgs {
	annual: PurchasesProduct
	monthly: PurchasesProduct
	isFirstWeekFree: boolean
	perMonthAnnual: string
}

export interface ProductStringsReturnType {
	purchaseString: string
	monthly: {
		price: string
		title: string
		perMonthString: string
	}
	annual: {
		price: string
		title: string

		perMonthString: string
		popular: string
		savings: (pct: number) => string
	}
}
