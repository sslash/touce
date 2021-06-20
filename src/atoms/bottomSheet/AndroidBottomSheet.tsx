import React, { PropsWithChildren, useRef } from 'react'
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { BottomSheetBehavior, CoordinatorLayout } from 'react-native-bottom-sheet-behavior'
import { useBackHandler } from '../../hooks/useBackHandler'
import { BSViewRef } from '../../nativeModules/BSView'
import lightColors from '../../theme/lightColors'
import { borderRadiusScale, screenWidth } from '../../theme/metrics'
import { spaceScale } from '../../theme/spacing'
import { useTheme } from '../../theme/themeContext'
import Bg from '../Bg'
import V from '../V'

interface Props {
	height: number
	children: React.ReactNode
	onDismiss: () => void
	testID?: string
}

export interface BottomSheetRefAndroid {
	setBottomSheetState: (state: number) => void
}

type Event = {
	nativeEvent: {
		offset: number
	}
}

const EXPANDED = 3
const COLLAPSED = 4
const y = new Animated.Value(0)

export default React.forwardRef<BSViewRef, PropsWithChildren<Props>>(
	({ height, children, onDismiss, testID }, parentRef) => {
		const bsRef = useRef<BottomSheetRefAndroid>()
		useBackHandler(closeModal)
		const { colors } = useTheme()
		const backgroundColor = colors.background

		React.useImperativeHandle(parentRef, () => ({
			closeModal,
		}))

		function closeModal(): boolean {
			bsRef.current?.setBottomSheetState(COLLAPSED)
			return true
		}

		React.useEffect(() => {
			// Need to do this to get the nice animation up
			const timeout = setTimeout(() => {
				bsRef.current?.setBottomSheetState(EXPANDED)
			}, 50)
			return () => {
				clearTimeout(timeout)
			}
		}, [])

		const opacity = y.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 0.9],
		})

		const onStateChange = (e: { nativeEvent: { state: number } }) => {
			if (e.nativeEvent.state === COLLAPSED) {
				onDismiss()
			}
		}

		const onSlide = (e: Event) => {
			Animated.event([{ nativeEvent: { offset: y } }], {
				useNativeDriver: false,
			})(e)
		}

		return (
			<View style={{ ...StyleSheet.absoluteFillObject }} {...{ testID }}>
				<CoordinatorLayout style={{ flex: 1 }}>
					<View style={{ flex: 1, backgroundColor: colors.transparent }} />
					<TouchableWithoutFeedback onPress={closeModal}>
						<Animated.View style={[styles.overlay, { opacity }]} />
					</TouchableWithoutFeedback>
					<BottomSheetBehavior
						style={{ position: 'absolute' }}
						ref={bsRef}
						peekHeight={0}
						hideable={true}
						onStateChange={onStateChange}
						onSlide={onSlide}
					>
						<View
							style={[
								styles.container,
								{
									height,
									backgroundColor,
								},
							]}
						>
							<V jc="center" ai="center">
								<Bg bg="primary50" style={styles.nod} />
							</V>
							{children}
						</View>
					</BottomSheetBehavior>
				</CoordinatorLayout>
			</View>
		)
	}
)

const styles = StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: -24,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: lightColors.modalBg,
	},
	nod: {
		marginBottom: spaceScale[2],
		marginTop: spaceScale[1],
		width: 40,
		borderRadius: 5,
		height: 5,
	},
	container: {
		position: 'absolute',
		paddingTop: spaceScale[2],
		borderTopLeftRadius: borderRadiusScale[4],
		borderTopRightRadius: borderRadiusScale[4],
		width: screenWidth,
	},
})
