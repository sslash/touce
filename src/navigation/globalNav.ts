import { NavigationContainerRef } from '@react-navigation/native'
import React from 'react'
import { retry } from '../utils/retry'
import { GlobalRedirectScreen } from './types'

export const globalNavigationRef = React.createRef<NavigationContainerRef>()

// it's possible that the nav ref has not been set before this
// function is called (e.g if called via a deep link opener for instance).
// Therefore we need to loop around it.
export async function getGlobalNav(): Promise<NavigationContainerRef> {
	const retrier = (): Promise<NavigationContainerRef> => {
		if (globalNavigationRef.current) {
			return Promise.resolve(globalNavigationRef.current)
		} else {
			return Promise.reject()
		}
	}

	return retry(retrier, 10, 'Failed to get a global navigation ref', 10)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function globalNavigate(name: GlobalRedirectScreen, params?: any): Promise<void> {
	const nav = await getGlobalNav()
	nav.navigate(name, params)
}
