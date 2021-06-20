import { RouteProp } from '@react-navigation/core'
import React from 'react'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import BottomSheet from '../../atoms/bottomSheet/BottomSheet'
import { BSViewRef } from '../../nativeModules/BsView'
import { RootStackParamList } from '../../navigation/types'
import { DialogVariant } from './constants'
import WorkoutTimerView from './dialogComponents/workoutTimer/WorkoutTimer'
import { DialogChildProps, DialogOpenProps } from './types'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'BottomSheetDialog'>
	route: RouteProp<RootStackParamList, 'BottomSheetDialog'>
}

export const BottomSheetDialogScreen = ({ navigation, route }: Props): JSX.Element | null => {
	const modalRef = React.useRef<BSViewRef>(null)
	const { height, ...props } = route.params

	const onDialogDismissed = () => {
		// noop for now
	}

	const hideDialog = () => {
		modalRef.current.closeModal()
	}

	const childProps = {
		hideDialog,
		...props,
	}

	return (
		<BottomSheet onDismiss={onDialogDismissed} ref={modalRef} {...{ height }}>
			{getBottomSheet(childProps)}
		</BottomSheet>
	)
}

function getBottomSheet({
	variant,
	...rest
}: DialogOpenProps<unknown> & DialogChildProps): JSX.Element {
	switch (variant) {
		case DialogVariant.WorkoutTimer:
			return <WorkoutTimerView {...rest} />

		default:
			throw new Error(`Illegal dialog variant: ${variant as string}`)
	}
}

export default BottomSheetDialogScreen
