import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useStrings } from '../../../localization/localizedStrings'
import Tooltip from '../../../molecules/tooltip/Tooltip'
import TooltipBody from '../../../molecules/tooltip/TooltipBody'

interface Props {
	onPress?: () => void
	isLiftMode?: boolean
}

const WorkoutOnboardingTooltip: React.FC<Props> = ({
	onPress,
	isLiftMode,
	children,
}): JSX.Element => {
	const strings = useStrings().strings.workout.timerTooltip[isLiftMode ? 'lift' : 'rest']
	return (
		<View>
			<Tooltip
				{...{ onPress }}
				yPosition="bottom"
				xPosition="center"
				arrowXPosition="center"
				arrowYPosition="top"
				tooltipContent={<TooltipBody {...strings} />}
				wrapperStyle={styles.wrapper}
				theme={isLiftMode ? 'colored' : 'normal'}
			>
				{children}
			</Tooltip>
		</View>
	)
}
const styles = StyleSheet.create({
	wrapper: { top: -22, width: 320, alignItems: 'center' },
})

export default WorkoutOnboardingTooltip
