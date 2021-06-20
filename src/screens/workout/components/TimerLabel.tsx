import React, { useCallback } from 'react'
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native'
import T from '../../../atoms/texts/T'
import { useExposedTo } from '../../../store'
import { useShiftMode } from '../../../store/shiftMode'
import { FontWeight } from '../../../theme/fonts'
import { secsToColonParts } from '../../../utils/time'
import { DialogVariant } from '../../bottomSheetDialog/constants'
import { openDialog } from '../../bottomSheetDialog/dialogOpenerApi'
import WorkoutOnboardingTooltip from './WorkoutOnboardingTooltip'

interface Props {
	currentCountdownSeconds: number
	isFreezed: boolean
	style?: ViewStyle
}

const TimerLabel = ({ currentCountdownSeconds, style, isFreezed }: Props): JSX.Element => {
	const [exposedToWorkoutOnboarding, update] = useExposedTo(
		useCallback((s) => [!s.workoutOnboarding, s.update], [])
	)
	const { isLiftMode } = useShiftMode()
	const hasSeconds = currentCountdownSeconds != null
	const label = hasSeconds ? secsToColonParts(currentCountdownSeconds) : noTimerEmoji(isLiftMode)
	const ContainerView = exposedToWorkoutOnboarding ? WorkoutOnboardingTooltip : View
	const containerProps = exposedToWorkoutOnboarding
		? { onPress: () => update('workoutOnboarding'), isLiftMode }
		: {}

	const onPressTimer = () => openDialog(DialogVariant.WorkoutTimer, { isLift: isLiftMode })

	return (
		<Pressable onPress={onPressTimer} style={{ zIndex: 10 }}>
			<ContainerView {...containerProps}>
				<T
					style={[styles.timer, style]}
					color={isLiftMode ? 'backgroundTransparent1000' : 'primaryText'}
					darkColor={isLiftMode ? 'secundary900' : 'primaryText'}
					op={isFreezed ? 0.2 : 1}
				>
					{label}
				</T>
			</ContainerView>
		</Pressable>
	)
}

const noTimerEmoji = (isLiftMode: boolean) => (isLiftMode ? '🔥' : '🧘‍♂️')
const styles = StyleSheet.create({
	timer: {
		fontSize: 55,
		fontWeight: FontWeight.Fat,
		fontStyle: 'italic',
		marginTop: 28,
		marginBottom: 14,
	},
})

export default TimerLabel
