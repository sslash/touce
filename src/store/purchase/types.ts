import { PurchaserInfo, PurchasesOfferings } from 'react-native-purchases'
import { AppStore } from '../types'

export enum PurchaseErrors {
	FailedToFetchProducts = 'fetch',
	GeneralPurchaseError = 'general',
	UserCancelledPurchaseError = 'cancelled',
}

export interface ViewModel {
	monthly: PackageViewModel
	annual: PackageViewModel
	trialString?: string
}

export interface InfoViewModel {
	purchaseDate: string
	expirationDate: string
	isTrial: boolean
}

export interface PackageViewModel {
	price: string
	title: string
	id: string
	purchaseSubTitle: string
	purchaseString: string
	perMonthString?: string
}

export interface PurchaseState extends AppStore {
	isPurchasing: boolean
	isFetchingOfferings: boolean
	errorCode: PurchaseErrors | null
	offerings?: PurchasesOfferings
	hasPurchasedPremium: boolean

	fetchData: () => Promise<void>
	purchaserInfoUpdateListener: (info: PurchaserInfo) => void
	purchase: ({ hasChosenAnnual: boolean }) => Promise<void>
}
