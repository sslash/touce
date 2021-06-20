import messaging from '@react-native-firebase/messaging'
import { createLogger } from '../logger'
import errorHandler from '../errors'

const log = createLogger('📣', 'get token')

export async function getToken(): Promise<string | undefined> {
	log.log('getting token', undefined, true)
	try {
		const fcmToken = await messaging().getToken()
		log.log('Token received: ', fcmToken)
		return fcmToken
	} catch (error) {
		errorHandler.reportError(error)
	}
}
