import { ViewStyle } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import { SludgeVariant } from '../../atoms/sludges'
import { RootStackParamList } from '../../navigation/types'
import { SpaceProps } from '../../theme/spacing'

/**
 * All screen keyboard offsets.
 */
export const offsets = {
	none: 0,
}

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = keyof typeof offsets

/**
 * All the variations of screens.
 */
export const presets = {
	/**
	 * No scrolling. Suitable for full-screen carousels and components
	 * which have built-in scrolling like FlatList.
	 */
	fixed: {
		outer: {
			flex: 1,
			height: '100%',
		} as ViewStyle,
		inner: {
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			height: '100%',
			width: '100%',
		} as ViewStyle,
	},

	/**
	 * Scrolls. Suitable for forms or other things requiring a keyboard.
	 *
	 * Pick this one if you don't know which one you want yet.
	 */
	scroll: {
		outer: {
			flex: 1,
			height: '100%',
		} as ViewStyle,
		inner: { justifyContent: 'flex-start', alignItems: 'stretch' } as ViewStyle,
	},
}

/**
 * The variations of screens.
 */
export type ScreenPresets = keyof typeof presets

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset?: ScreenPresets): boolean {
	// any of these things will make you scroll
	return !preset || !preset.length || !presets[preset] || preset === 'fixed'
}

export interface ScreenProps extends SpaceProps {
	/**
	 * Children components.
	 */
	children?: React.ReactNode

	/**
	 * An optional style override useful for padding & margin.
	 */
	style?: ViewStyle

	/**
	 * One of the different types of presets.
	 */
	preset?: ScreenPresets

	/**
	 * An optional background color
	 */
	backgroundColor?: string

	/**
	 * An optional status bar setting. Defaults to light-content.
	 */
	statusBar?: 'light-content' | 'dark-content'

	/**
	 * Should we not wrap in SafeAreaView? Defaults to false.
	 */
	unsafe?: boolean

	/**
	 * By how much should we offset the keyboard? Defaults to none.
	 */
	keyboardOffset?: KeyboardOffsets

	/**
	 * Whether the keyboardAvoidingView is enabled
	 */
	keyboardAvoidingEnabled?: boolean

	/**
	 * Include a sludge-header
	 */
	sludge?: SludgeVariant

	/**
	 * Styling for the sludge
	 */
	sludgeStyle?: ViewStyle

	testID?: string

	/**
	 * Include 16pt horizontal margin (default)
	 */
	stdMargin?: boolean

	/**
	 * Include 104 top padding, for screens with a standard nav
	 * header
	 */
	navPadding?: boolean

	/**
	 * Top-navigation header props
	 */
	headerTitle?: string | JSX.Element
	headerSubTitle?: string | JSX.Element

	/**
	 * Navigation reference
	 */
	navigation?: NativeStackNavigationProp<RootStackParamList>

	/**
	 * Will show a back button
	 */
	backButtonStyle?: 'push' | 'modal'
}
