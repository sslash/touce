import React from 'react'
import Bg from '../atoms/Bg'
import Row from '../atoms/Row'
import Caption2 from '../atoms/texts/Caption2'
import Lead2 from '../atoms/texts/Lead2'
import Secundary from '../atoms/texts/Secundary'
import V from '../atoms/V'
import { TimerTemplate } from '../models/timerTemplate'
import { borderRadiusScale } from '../theme/metrics'
import { secsToColonParts } from '../utils/time'

interface Props {
	timerTemplate: TimerTemplate
	index: number
	isSelected?: boolean
}

const AdvancedTimerRound = ({ isSelected, timerTemplate, index }: Props): JSX.Element => {
	const lift = 'WORK'
	const rest = 'REST'
	const indexColor = isSelected ? 'primaryDeath' : 'grey600'
	const captionColor = isSelected ? 'primaryDeath' : 'grey'
	const restSecs = secsToColonParts(timerTemplate.rest.durationSeconds)
	const liftSecs = secsToColonParts(timerTemplate.rest.durationSeconds)

	return (
		<Bg
			bg={isSelected ? 'primary20' : 'background'}
			p={3}
			style={{ alignSelf: 'flex-start', borderRadius: borderRadiusScale[3] }}
		>
			<Row ai="center">
				<Secundary fw="Bold" color={indexColor} mr={4}>
					{index + 1}
				</Secundary>
				<V ai="center" mr={3}>
					<Caption2 fw="Bold" color={captionColor}>
						{rest}
					</Caption2>
					<Lead2 fw="Fat" italic color="primary600">
						{restSecs}
					</Lead2>
				</V>
				<V ai="center">
					<Caption2 fw="Bold" color={captionColor}>
						{lift}
					</Caption2>
					<Lead2 fw="Fat" italic>
						{liftSecs}
					</Lead2>
				</V>
			</Row>
		</Bg>
	)
}

export default AdvancedTimerRound
