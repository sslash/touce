import React from 'react'
import { KeyboardAvoidingView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native'
import Animated, {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Sludge } from '../../atoms/sludges'
import { mainHorizontalMargin } from '../../theme/metrics'
import applySpace from '../../theme/spacing'
import { useTheme } from '../../theme/themeContext'
import { isNonScrolling, offsets, presets, ScreenProps } from './screenConfig'
import ScreenHeader from './ScreenHeader'

interface ScreenPropsInner extends ScreenProps {
	backgroundStyle: ViewStyle
	insetStyle: ViewStyle
}

function ScreenWithoutScrolling(props: ScreenPropsInner) {
	const preset = presets.fixed

	return (
		<KeyboardAvoidingView
			testID={props.testID}
			style={[preset.outer, props.backgroundStyle]}
			behavior={global.IS_IOS ? 'padding' : undefined}
			keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
			enabled={props.keyboardAvoidingEnabled}
		>
			<StatusBar barStyle={props.statusBar || 'dark-content'} />
			<View
				style={[
					preset.inner,
					props.style,
					props.insetStyle,
					applySpace(props),
					props.stdMargin && styles.stdMargin,
					props.navPadding && styles.navPadding,
				]}
			>
				{!!props.sludge ? (
					<Sludge variant={props.sludge} style={props.sludgeStyle} />
				) : null}
				<ScreenHeader {...props} />
				{props.children}
			</View>
		</KeyboardAvoidingView>
	)
}

// TODO: make the scroll-scree sludges taller
function ScreenWithScrolling(props: ScreenPropsInner) {
	const preset = presets.scroll
	const position = useSharedValue(0)

	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (e) => {
			position.value = e.contentOffset.y
		},
	})

	const animatedStyle = useAnimatedStyle(() => {
		const v = position.value
		return {
			transform: [
				{
					translateY: v > 20 ? -v * 0.8 : -v * 0.2,
				},
			],
		}
	})

	return (
		<KeyboardAvoidingView
			testID={props.testID}
			style={[preset.outer, props.backgroundStyle]}
			behavior={global.IS_IOS ? 'padding' : undefined}
			keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
			enabled={props.keyboardAvoidingEnabled}
		>
			<StatusBar barStyle={props.statusBar || 'dark-content'} />
			<View style={[preset.outer, props.backgroundStyle, props.insetStyle]}>
				{props.sludge ? (
					<Animated.View style={animatedStyle}>
						<Sludge variant={props.sludge} style={props.sludgeStyle} />
					</Animated.View>
				) : null}
				<Animated.ScrollView
					style={[preset.outer]}
					onScroll={scrollHandler}
					scrollEventThrottle={1}
					contentContainerStyle={[
						preset.inner,
						props.style,
						props.stdMargin && styles.stdMargin,
						props.navPadding && styles.navPadding,
						applySpace(props),
					]}
				>
					<ScreenHeader {...props} />
					{props.children}
				</Animated.ScrollView>
			</View>
		</KeyboardAvoidingView>
	)
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
function Screen({ keyboardAvoidingEnabled = true, ...props }: ScreenProps): JSX.Element {
	const backgroundColor = useTheme().colors.background
	const insets = useSafeAreaInsets()
	const backgroundStyle = { backgroundColor }
	const nonScrolling = isNonScrolling(props.preset)
	const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }
	const innerProps = { ...{ backgroundStyle, insetStyle, keyboardAvoidingEnabled } }

	const InnerScreen = nonScrolling ? ScreenWithoutScrolling : ScreenWithScrolling

	return <InnerScreen {...props} {...innerProps} />
}

const styles = StyleSheet.create({
	stdMargin: { paddingHorizontal: mainHorizontalMargin },
	navPadding: { paddingTop: 104 },
})

export default Screen
