/**
 * ⚡️
 */
import { ApolloProvider } from '@apollo/client/react'
import React, { useEffect, useState } from 'react'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import LocalizationProvider from './src/localization/localizedStrings'
import NavigationContainer from './src/navigation/NavigationContainer'
import BroadcastMessageRenderer from './src/organisms/BroadcastMessageRenderer'
import { BootstrapDocument } from './src/queries/autogenerate/hooks'
import { waitForStoreHydration } from './src/store/helpers/storeHydration'
import ThemeManager from './src/theme/themeContext'
import apolloManager from './src/utils/apollo/apolloClient'
import AppBootstrap from './src/utils/AppBootstrap'
import { AppLoop } from './src/utils/AppLoop'
import authToken from './src/utils/authentication/authToken'
import DeepLinkListener from './src/utils/deepLinks/DeepLinkListener'
import errorHandler from './src/utils/errors'
import MediaProgressListeners from './src/utils/MediaProgressListeners'

const Spark = (): JSX.Element => {
	const [canRender, setCanRender] = useState(false)

	useEffect(() => void prefetchQueries(), [])

	const prefetchQueries = async () => {
		await authToken.syncToken()
		await waitForStoreHydration()

		try {
			await apolloManager.client.query({ query: BootstrapDocument })
		} catch (error) {
			errorHandler.reportError(error)
		} finally {
			setCanRender(true)
		}
	}

	if (!canRender) {
		return null
	}

	return (
		<ThemeManager>
			<SafeAreaProvider initialMetrics={initialWindowMetrics}>
				<LocalizationProvider>
					<ApolloProvider client={apolloManager.client}>
						<NavigationContainer />
						<AppLoop />
						<MediaProgressListeners />
						<AppBootstrap />
						<DeepLinkListener />
						<BroadcastMessageRenderer />
					</ApolloProvider>
				</LocalizationProvider>
			</SafeAreaProvider>
		</ThemeManager>
	)
}

export default Spark
