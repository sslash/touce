import dynamicLinks, { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links'
import { useEffect } from 'react'
import { Linking } from 'react-native'

export function useDeepLinkListener(
	handleDynamicLink: (link: FirebaseDynamicLinksTypes.DynamicLink) => void,
	handleUrlOpen: (event: { url: string }) => void
): void {
	// When the app is in the foreground state
	// (visible on the device), you can use the
	// onLink method to subscribe to events as and when they happen:
	useEffect(() => {
		if (global.IS_IOS) {
			const unsubscribe = dynamicLinks().onLink(handleDynamicLink)
	
			// When the component is unmounted, remove the listener
			return () => unsubscribe()
		}
	}, [])

	// If the application is in a background state
	// or has fully quit then the getInitialLink
	// method can be used to detect whether
	// the application was opened via a link:
	useEffect(() => {
		if (global.IS_IOS) {
			void dynamicLinks().getInitialLink().then(handleDynamicLink)
		}
	}, [])

	// TODO if * does not work for:
	// notes
	// opening from castbox
	// remove * and try to uncomment this thing:

	// registers opens such as open from a share-file dialog,
	// or an iOS widget open.
	// TODO: do we need this?
	useEffect(() => {
		Linking.addEventListener('url', handleUrlOpen)

		return () => Linking.removeEventListener('url', handleUrlOpen)
	}, [])
}
