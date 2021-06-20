import dynamicLinks from '@react-native-firebase/dynamic-links'
import errorHandler from '../errors'

import { createLogger } from '../logger'

const log = createLogger('📣', 'Request Push permission')

export async function buildLink(): Promise<string> {
	log.log('Building link', undefined, true)
	try {
		const link = await dynamicLinks().buildLink({
			link: 'https://invertase.io',
			// domainUriPrefix is created in your Firebase console
			domainUriPrefix: 'https://xyz.page.link',
			// optional setup which updates Firebase analytics campaign
			// "banner". This also needs setting up before hand
			analytics: {
				campaign: 'banner',
			},
		})
		log.log('Link created', { link }, true)

		return link
	} catch (error) {
		errorHandler.reportError(error)
	}
}
