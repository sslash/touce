import 'react-native-gesture-handler'
import { AppRegistry, Platform, UIManager } from 'react-native'
import './src/utils/constants'
import { name as appName } from './app.json'
import Spark from './Spark'
import { withErrorBoundary } from '@sentry/react'

// uncomment to enable bridge debugging
// import { debugBridge } from './src/utils/bridgeDebugger'
// if (__DEV__) {
// 	debugBridge()
// }

if (Platform.OS === 'android') {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true)
	}
}

AppRegistry.registerComponent(appName, () => withErrorBoundary(Spark))

export default Spark
