import { useNavigation } from '@react-navigation/native'
import React, { forwardRef, PropsWithChildren, useRef } from 'react'
import BSView, { BSViewRef, cardHandleHeight } from '../../nativeModules/BsView'
import { View } from 'react-native'
import { screenHeight } from '../../theme/metrics'
import { responsive } from '../../theme/utils'
import { BottomSheetProps } from './types'
import AndroidBottomSheet from './AndroidBottomSheet'

// Small screens need more space,
// and large screens don't need that much.
const sh = screenHeight
export enum modalHeights {
	TOP = screenHeight - global.ifIos(50, 75),
	MIDDLE = responsive({ s: sh * 0.65, m: sh * 0.62 }, sh * 0.58),
	SMALL = sh * 0.4,
}

/**
 *
 * example
 * ```
 * <BottomSheet height={400}></BottomSheet>
 * ```
 */
const BottomSheet = forwardRef<BSViewRef, PropsWithChildren<BottomSheetProps>>(
	(props, parentRef) => {
		const nav = useNavigation()
		const ref = useRef<BSViewRef>()

		const { height = modalHeights.MIDDLE, onDismiss, testID, children } = props

		const closeModal = () => {
			if (ref?.current) {
				return ref.current.closeModal()
			}
		}

		// when the native modal is dismissed,
		// either by swip down, or if we
		// programatically close it
		const _onDismiss = () => {
			// important to call onDismiss after we have navigated back
			// in case the caller wants to navigate
			setTimeout(onDismiss)
			nav.goBack()
		}

		React.useImperativeHandle(parentRef, () => ({
			closeModal,
		}))

		if (global.IS_IOS) {
			const heightBelowHandle = height - cardHandleHeight

			return (
				<View style={{ flex: 1 }} testID={testID}>
					<BSView style={{ flex: 1 }} height={height} onDismiss={_onDismiss} ref={ref}>
						<View style={{ height: heightBelowHandle }}>{children}</View>
					</BSView>
				</View>
			)
		} else {
			return (
				<View style={{ flex: 1 }}>
					<AndroidBottomSheet
						height={height}
						onDismiss={_onDismiss}
						testID={testID}
						ref={ref}
					>
						{children}
					</AndroidBottomSheet>
				</View>
			)
		}
	}
)

export default BottomSheet
