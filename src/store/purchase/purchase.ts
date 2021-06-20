import Purchases, { PurchaserInfo, PurchasesError } from 'react-native-purchases'
import create from 'zustand'
import analyticsClient from '../../utils/analyticsClient'
import config from '../../utils/config/config'
import errorHandler from '../../utils/errors'
import { createLogger } from '../../utils/logger'
import { PurchaseErrors, PurchaseState } from './types'
import { checkIfHasPremium, getAnnual, getMonthly } from './utils'

const log = createLogger('💸', 'purchases')

export const usePurchase = create<PurchaseState>((set, get) => ({
	isPurchasing: false,
	isFetchingOfferings: false,
	errorCode: null,
	offerings: undefined,
	hasPurchasedPremium: false,

	fetchData: async () => {
		// TODO: android
		if (global.IS_ANDROID) {
			return
		}

		log.log(`Fetching RevenueCat data. key: ${config.revenueCatKey}`, undefined, true)
		set({ isFetchingOfferings: true, errorCode: null })

		Purchases.setDebugLogsEnabled(__DEV__)
		Purchases.setup(config.revenueCatKey)
		Purchases.addPurchaserInfoUpdateListener(get().purchaserInfoUpdateListener)

		try {
			const offerings = await Purchases.getOfferings()
			const purchaserInfo = await Purchases.getPurchaserInfo()
			log.log('RevenueCat offerings:', offerings)
			log.log('RevenueCat purchaser info:', purchaserInfo)
			set({ offerings })

			const hasPremium = checkIfHasPremium(purchaserInfo)
			log.log('User has premium? ', { hasPremium }, true)

			if (hasPremium) {
				set({ hasPurchasedPremium: true })
				analyticsClient.converted()
			} else {
				set({ hasPurchasedPremium: false })
			}
		} catch (e) {
			errorHandler.reportError(e)
			set({ errorCode: PurchaseErrors.FailedToFetchProducts })
		} finally {
			set({ isFetchingOfferings: false })
		}
	},

	purchase: async ({ hasChosenAnnual }): Promise<void> => {
		log.log('Purchasing ', { hasChosenAnnual }, true)
		const { offerings } = get()
		try {
			const pck = hasChosenAnnual ? getAnnual(offerings) : getMonthly(offerings)
			set({ isPurchasing: true, errorCode: null })
			const purchaseMade = await Purchases.purchasePackage(pck)
			const has = checkIfHasPremium(purchaseMade.purchaserInfo)
			log.log('Purchase finished! Has premium entitlement? ', has)

			return set({ hasPurchasedPremium: has })
		} catch (e) {
			if ((e as PurchasesError).userCancelled) {
				log.log(`User cancelled`, e, true)
				set({ errorCode: PurchaseErrors.UserCancelledPurchaseError })
			} else {
				set({ errorCode: PurchaseErrors.GeneralPurchaseError })

				log.log(`Error handling`, e, true)
			}
		} finally {
			set({ isPurchasing: false })
		}
	},

	purchaserInfoUpdateListener: (info: PurchaserInfo): void => {
		const hasPurchasedPremium = checkIfHasPremium(info)
		log.log(`purchaserInfoUpdateListener()`, { hasPurchasedPremium }, true)

		set({ hasPurchasedPremium })
	},
}))
