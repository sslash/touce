import Rate, { AndroidMarket } from 'react-native-rate'
import config from './config/config'
import { createLogger } from './logger'

const logger = createLogger(undefined, 'rating')

export const ratingOptions = {
	AppleAppID: config.appleAppId,
	GooglePackageName: config.googlePackageName,
	OtherAndroidURL: config.googlePlayStoreUrl,
	preferredAndroidMarket: AndroidMarket.Google,
	preferInApp: true,
	openAppStoreIfInAppFails: true,
	fallbackPlatformURL: config.websiteUrl,
}

export const showNativeRatingDialog = (): Promise<unknown> => {
	logger.log('Rate initiated')

	return new Promise((resolve) => {
		Rate.rate(ratingOptions, (success: unknown) => {
			// @success - this technically only tells us if the
			// user successfully went to the Review Page.
			// Whether they actually did anything, we do not know.
			logger.log('Rating result ', success)

			resolve(success)
		})
	})
}
