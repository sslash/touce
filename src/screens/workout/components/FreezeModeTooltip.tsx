import React from 'react'
import { useStrings } from '../../../localization/localizedStrings'
import Tooltip from '../../../molecules/tooltip/Tooltip'
import TooltipBody from '../../../molecules/tooltip/TooltipBody'

interface Props {
	onPress?: () => void
}

const FreezeModeTooltip: React.FC<Props> = ({ children, onPress }): JSX.Element => {
	const strings = useStrings().strings.workout.timerPaused
	return (
		<Tooltip
			yPosition="bottom"
			xPosition="center"
			arrowXPosition="center"
			arrowYPosition="top"
			onPress={onPress}
			tooltipContent={<TooltipBody title={strings.title} body={strings.text} />}
		>
			{children}
		</Tooltip>
	)
}

export default FreezeModeTooltip
