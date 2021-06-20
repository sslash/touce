import { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links'
import React from 'react'
import { globalNavigate } from '../../navigation/globalNav'
import { GlobalRedirectScreen } from '../../navigation/types'
import { createLogger } from '../logger'
import { useDeepLinkListener } from './useDeepLinkListener'

const log = createLogger('🔗', 'deep-links')

const DeepLinkListener = (): React.ReactElement => {

	useDeepLinkListener(onLinkOpen, onFileOpen)

	function onLinkOpen(link: FirebaseDynamicLinksTypes.DynamicLink | null): void {
		if (!link) {
			return
		}

		log.log('Deeplink initiated', link, true)
		parseAndNavigate(link.url)
	}

	function onFileOpen(event: { url: string }) {
		log.log('onFileOpen URL', event.url, true)
		parseAndNavigate(event.url)
	}

	return null
}

function parseAndNavigate(url: string) {
	let navName: GlobalRedirectScreen = null

	switch (true) {
		case _isFile(url):
			navName = 'PodcastImport'
			break

		default:
			break
	}

	if (navName) {
		void globalNavigate(navName)
	}
}

function _isFile(url: string): boolean {
	return url.startsWith('file://')
}

export default DeepLinkListener
