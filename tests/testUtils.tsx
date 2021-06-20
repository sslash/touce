import { MockedProvider } from '@apollo/client/testing'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const mocks = []

export const TestAppProvider: React.FC = ({ children }) => (
	<SafeAreaProvider
		initialMetrics={{
			frame: { x: 0, y: 0, width: 0, height: 0 },
			insets: { top: 22, left: 0, right: 0, bottom: 0 },
		}}
	>
		<MockedProvider mocks={mocks} addTypename={false}>
			{children}
		</MockedProvider>
	</SafeAreaProvider>
)
