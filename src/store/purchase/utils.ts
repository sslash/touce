import Purchases, {
	PurchaserInfo,
	PurchasesProduct,
	PurchasesOfferings,
	PurchasesPackage,
} from 'react-native-purchases'
import { InfoViewModel } from './types'

export const SHIFT_PREMIUM_ENTITLEMENT = 'unlimited'

export function checkIfHasPremium(purchaserInfo: PurchaserInfo): boolean {
	if (typeof purchaserInfo.entitlements.active[SHIFT_PREMIUM_ENTITLEMENT] !== 'undefined') {
		return true
	} else {
		return false
	}
}

export const getMonthly = (offerings: PurchasesOfferings): PurchasesPackage | undefined =>
	offerings?.current?.monthly

export const getAnnual = (offerings: PurchasesOfferings): PurchasesPackage | undefined =>
	offerings?.current?.annual

export const getIsFirstWeekFree = (product: PurchasesProduct): boolean => {
	const isWeekly = product.introPrice?.periodUnit === 'WEEK'
	return isWeekly && product.introPrice?.periodNumberOfUnits === 1
}

export const getPurchaserInfo = async (): Promise<InfoViewModel | null> => {
	const info = await Purchases.getPurchaserInfo()
	const hasPremium = checkIfHasPremium(info)
	if (!hasPremium) {
		return null
	}

	return {
		purchaseDate: info.entitlements.active[SHIFT_PREMIUM_ENTITLEMENT].latestPurchaseDate,
		expirationDate: info.entitlements.active[SHIFT_PREMIUM_ENTITLEMENT].expirationDate!,
		isTrial: info.entitlements.active[SHIFT_PREMIUM_ENTITLEMENT].periodType === 'TRIAL',
	}
}

export const getSavingsForAnnual = (annualPrice: number, monthlyPrice: number): number => {
	const totalMonthly = monthlyPrice * 12
	const diff = totalMonthly - annualPrice
	return Math.round((diff / totalMonthly) * 100)
}
