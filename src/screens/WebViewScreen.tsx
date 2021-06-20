import { RouteProp } from '@react-navigation/core'
import React from 'react'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import WebView from 'react-native-webview'
import LoadingOverlay from '../atoms/LoadingOverlay'
import EmptyView from '../molecules/EmptyView'
import Screen from '../molecules/screen/Screen'
import { RootStackParamList } from '../navigation/types'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'WebView'>
	route: RouteProp<RootStackParamList, 'WebView'>
}

const WebViewScreen = ({ route }: Props): React.ReactElement => {
	const { uri } = route.params
	return (
		<Screen preset="fixed" unsafe>
			<WebView
				style={{ width: '100%', height: '100%' }}
				source={{
					uri,
				}}
				renderLoading={() => <LoadingOverlay />}
				startInLoadingState
				renderError={() => <EmptyView title="Failed" subTitle="Failed to load page" />}
			></WebView>
		</Screen>
	)
}

export default WebViewScreen
