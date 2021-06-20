import { Share } from 'react-native'
import errorHandler from './errors'
import { createLogger } from './logger'

const log = createLogger('❤️', 'share')
const SHARE_TEXT = 'Shift - Podcasts & music mixed perfectly into your workout'

export const showNativeShareDialog = async (): Promise<void> => {
	log.log('Sharing initiated', true)
	try {
		const result = await Share.share({
			message: SHARE_TEXT,
		})

		log.log('Sharing complete ', result, true)
	} catch (error) {
		errorHandler.reportError(error)
	}
}
