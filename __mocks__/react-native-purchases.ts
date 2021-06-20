import { SHIFT_PREMIUM_ENTITLEMENT } from '../src/store/purchase/utils'
import { offeringsFixture } from '../__mockFixtures__/offerings.fixture'

const api = {
	setDebugLogsEnabled: jest.fn(),
	setup: jest.fn(),
	getOfferings: () => Promise.resolve(offeringsFixture),
	getPurchaserInfo: jest.fn(),
	purchasePackage: () =>
		Promise.resolve({
			purchaserInfo: {
				entitlements: {
					active: {
						[SHIFT_PREMIUM_ENTITLEMENT]: 'foo',
					},
				},
			},
		}),
	addPurchaserInfoUpdateListener: jest.fn(),
}

export default api
