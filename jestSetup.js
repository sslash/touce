import 'react-native-gesture-handler/jestSetup'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import './src/utils/constants'
import { View as MockView, ScrollView as MockScrollView } from 'react-native'

global.__reanimatedWorkletInit = jest.fn()

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)
jest.mock('react-native-linear-gradient', () => MockView)
jest.mock('react-native-reanimated', () => ({
	default: jest.fn(),
	View: MockView,
	ScrollView: MockScrollView,
	useSharedValue: jest.fn(),
	useAnimatedScrollHandler: jest.fn(),
	useAnimatedStyle: jest.fn(),
}))
jest.mock('react-native-vector-icons/Ionicons', () => MockView)

jest.mock('@sentry/react-native', () => ({
	init: () => jest.fn(),
	addBreadcrumb: () => jest.fn(),
	captureException: () => jest.fn(),
}))

jest.mock('react-native-bottom-sheet-behavior', () => jest.fn())
