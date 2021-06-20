import React, { memo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ScalingTapView from '../../../atoms/ScalingTapView'
import { Icon } from '../../../icons'
import { useExposedTo, useShiftMode } from '../../../store'
import { ColorTypes } from '../../../theme/types'
import FreezeModeTooltip from './FreezeModeTooltip'

interface Props {
	isFreezed: boolean
	toggleFreeze: () => void
}

const FreezeButtonMemoed = memo(({ isFreezed, toggleFreeze }: Props): React.ReactElement => {
	const { isLiftMode } = useShiftMode()
	const exposedTo = useExposedTo()
	const [showTooltip, setShowTooltip] = useState(false)

	const onFreeze = () => {
		if (!exposedTo.workoutFreezed) {
			setShowTooltip(true)
			exposedTo.update('workoutFreezed', true)
		}

		toggleFreeze()
	}

	const onTooltipPress = () => {
		setShowTooltip(false)
	}

	const ContainerView = showTooltip ? FreezeModeTooltip : View
	const containerProps = showTooltip ? { onPress: onTooltipPress } : {}
	const iconProps = { fill: (isLiftMode ? 'primary500' : 'secundary600') as ColorTypes }

	return (
		<ContainerView {...containerProps}>
			<ScalingTapView onPress={onFreeze} style={styles.container} hasHaptic hitSlop="large">
				{isFreezed ? (
					<Icon icon="play-outline" {...iconProps} />
				) : (
					<Icon icon="pause-outline" {...iconProps} />
				)}
			</ScalingTapView>
		</ContainerView>
	)
}, isEqual)

function isEqual(a: Props, b: Props) {
	return a.isFreezed === b.isFreezed
}

const styles = StyleSheet.create({
	container: { height: 24, alignItems: 'center', justifyContent: 'center' },
})
export default FreezeButtonMemoed
