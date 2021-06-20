import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native'
import React from 'react'
import { TestAppProvider } from '../../../../tests/testUtils'
import { usePurchase } from '../../../store/purchase/purchase'
import PaywallScreen from '../PaywallScreen'

const defaultProps = {
	route: {},
	navigation: {
		navigate: jest.fn(),
	},
} as any

describe('PaywallScreen', () => {
	beforeAll(() => {
		return usePurchase.getState().fetchData()
	})

	describe('render', () => {
		it('should render products', async () => {
			const { getByText } = render(
				<TestAppProvider>
					<PaywallScreen {...defaultProps} />
				</TestAppProvider>
			)

			expect(getByText('$4.99 / Month')).toBeDefined()
			expect(getByText('3.33 USD / Month')).toBeDefined()
		})
	})

	describe('actions', () => {
		it('set loading state when purchasing', async () => {
			const navigate = jest.fn()
			const { getByTestId, getByLabelText } = render(
				<TestAppProvider>
					<PaywallScreen {...defaultProps} navigation={{ navigate }} />
				</TestAppProvider>
			)

			fireEvent.press(getByTestId('paywall-purchase'))

			expect(getByLabelText(/Purchasing/i)).not.toBeUndefined()

			await waitForElementToBeRemoved(() => getByTestId('paywall-purchase'))
			expect(navigate).toHaveBeenCalledWith('Home')
		})
	})
})
