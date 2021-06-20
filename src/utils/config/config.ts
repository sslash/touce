import rnConfig from 'react-native-config'
import pckJson from '../../../package.json'

const config = {
	env: rnConfig.ENV,
	appSecret: rnConfig.APP_SECRET,
	isSandbox: false, // TODO: get this from config
	baseApiUrl: rnConfig.BASE_API_URL,
	graphqlApi: `${rnConfig.BASE_API_URL}${rnConfig.GQL_ENDPOINT}`,
	appleSearchApi: rnConfig.APPLE_SEARCH_API,
	version: pckJson.version,
	appleAppId: rnConfig.APPLE_APP_ID,
	googlePackageName: rnConfig.GOOGLE_PACKAGE_NAME,
	googlePlayStoreUrl: rnConfig.GOOGLE_PLAY_STORE_URL,
	senryDSN: rnConfig.SENTRY_DSN,
	revenueCatKey: rnConfig.REVENUE_CAT_KEY,
	feedbackUri: rnConfig.FEEDBACK_URI,
	whatsNewUri: rnConfig.WHATS_NEW,
	websiteUrl: rnConfig.WEBSITE_URL,
	termsUrl: rnConfig.TERMS_URL,
	privacyUrl: rnConfig.PRIVACY_URL,
	openSource: rnConfig.OPEN_SOURCE,
}

export default config
