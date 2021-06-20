import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

const options = {
	enableVibrateFallback: false, // short vibrate on android
	ignoreAndroidSystemSettings: false,
}

type HapticFeedbackTypes =
	| 'selection'
	| 'impactLight'
	| 'impactMedium'
	| 'impactHeavy'
	| 'notificationSuccess'
	| 'notificationWarning'
	| 'notificationError'
	| 'clockTick'
	| 'contextClick'
	| 'keyboardPress'
	| 'keyboardRelease'
	| 'keyboardTap'
	| 'longPress'
	| 'textHandleMove'
	| 'virtualKey'
	| 'virtualKeyRelease'

export const haptic = (impact: HapticFeedbackTypes): void => {
	ReactNativeHapticFeedback.trigger(impact, options)
}
