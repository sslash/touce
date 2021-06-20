import { Platform } from 'react-native'

global.IS_IOS = Platform.OS === 'ios'
global.IS_ANDROID = Platform.OS === 'android'
global.ifIos = <T>(a: T, b: T) => (global.IS_IOS ? a : b)
