import React, { forwardRef, PropsWithChildren, useRef } from 'react'
import { findNodeHandle, requireNativeComponent, UIManager, ViewStyle } from 'react-native'
import { useTheme } from '../theme/themeContext'

export interface BSViewRef {
	closeModal: () => void
}

interface Props {
	height?: number
	onDismiss?: () => void
	style: ViewStyle
}

export const cardHandleHeight = 65

const BSView = forwardRef<BSViewRef, PropsWithChildren<Props>>((props, parentRef) => {
	const ref = useRef()
	const { theme } = useTheme()

	const closeModal = () => {
		if (ref.current) {
			return UIManager.dispatchViewManagerCommand(
				findNodeHandle(ref.current),
				UIManager.BSView.Commands.dismissModal,
				[]
			)
		}
	}

	React.useImperativeHandle(parentRef, () => ({
		closeModal,
	}))

	return <RCTBSViewComponent ref={ref} {...props} {...{ theme }} />
})

// @ts-ignore
const RCTBSViewComponent = requireNativeComponent('BSView', BSView)

export default BSView
