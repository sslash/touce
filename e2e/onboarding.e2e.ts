import { expect } from 'detox'

describe('Onboarding', () => {
	beforeEach(async () => {
		await device.reloadReactNative()
	})

	it('should step all the way through to home screen', async () => {
		await waitFor(element(by.id('vibeScreen'))).toBeVisible()

		await element(by.id('activity-strength')).tap()
		await element(by.id('vibeContinue')).tap()
		await expect(element(by.id('yourGoalScreen'))).toBeVisible()

		await element(by.id('goal-learning')).tap()
		await element(by.id('goalContinue')).tap()
		await expect(element(by.id('howToScreen'))).toBeVisible()

		await element(by.id('howToContinue')).tap()

		await expect(element(by.id('homeScreen'))).toBeVisible()

		// after reload, we should see the home screen first
		await device.reloadReactNative()

		// await waitFor(element(by.id('vibeScreen'))).toBeVisible()
		await expect(element(by.id('homeScreen'))).toBeVisible()
	})
})
