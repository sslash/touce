import _ from 'lodash'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Bg from '../../atoms/Bg'
import Ellipse from '../../atoms/Ellipse'
import Row from '../../atoms/Row'
import Separator from '../../atoms/Separator'
import Action from '../../atoms/texts/Action'
import Caption from '../../atoms/texts/Caption'
import V from '../../atoms/V'
import { mainHorizontalMargin, screenWidth } from '../../theme/metrics'
import { spaceScale } from '../../theme/spacing'
import { secsToColonParts } from '../../utils/time'
import { StackItem } from './types'
import { highestValue } from './utils'

interface Props {
	items: StackItem[]
}

const maxHeight = 200
const NUMBER_OF_TICKS = 3
const fullWidth = screenWidth - mainHorizontalMargin * 2
const tickItems = _.range(0, NUMBER_OF_TICKS)
const liftColor = 'primary500'
const restColor = 'primaryText'

const StackChart = ({ items }: Props): JSX.Element => {
	const highestTime = highestValue(items)
	const ticksSize = 35
	const graphArea = fullWidth - ticksSize
	const { stackWidth, paddingHorizontal } = getRoundSizes(graphArea, items)

	// used to build up the graph ticks in the margin,
	// e.g if the highest chart is 6 minutes,
	// we want to make ticks like: 2min, 4min, 6min
	const createTickSeconds = (i: number) => highestTime * ((NUMBER_OF_TICKS - i) / NUMBER_OF_TICKS)

	return (
		<V mt={6}>
			<Row ai="flex-end" mb={4}>
				<V height={maxHeight} width={ticksSize} jc="space-between">
					{tickItems.map((i) => (
						<Row key={`${i}`}>
							<V width={ticksSize} pt={1}>
								<Action color="primaryTransparent400">
									{secsToColonParts(createTickSeconds(i))}
								</Action>
							</V>
							<V style={{ position: 'absolute' }}>
								<Separator length={graphArea} />
							</V>
						</Row>
					))}

					<View>{/* important placeholder, representing the 0 coordinate */}</View>
				</V>
				<Row width={graphArea} ai="flex-end">
					{items.map(({ value, isRest }, i) => {
						const timeFraction = value / highestTime
						return (
							<View style={{ width: stackWidth, paddingHorizontal }} key={i}>
								<Bg
									bg={isRest ? liftColor : restColor}
									height={maxHeight * timeFraction}
									width={'100%'}
									style={styles.stack}
								/>
							</View>
						)
					})}
				</Row>
			</Row>

			<Row jc="space-between" ai="center" mb={4}>
				<Action color="primaryTransparent600">0m</Action>
				<View style={{ flexGrow: 1, paddingHorizontal: 8 }}>
					<Separator length="100%" isHorizontal />
				</View>
				<Action color="primaryTransparent600">42m</Action>
			</Row>

			<Row ai="center" jc="center">
				<Row ai="center">
					<Ellipse size={12} bg={liftColor} />
					<Caption fw="DemiBold" ml={2}>
						Podcast
					</Caption>
				</Row>
				<Row ai="center" ml={5}>
					<Ellipse size={12} bg={restColor} />
					<Caption fw="DemiBold" color={restColor} ml={2}>
						Music
					</Caption>
				</Row>
			</Row>
		</V>
	)
}

function getRoundSizes(graphArea: number, items: { value: number; isRest: boolean }[]) {
	// calc width of graph stacks
	const stackWidth = graphArea / items.length

	// calc margin
	const fractionMargin = Math.ceil(stackWidth * 0.1)
	const fractionOrDetault = Math.min(fractionMargin, spaceScale[1])
	const paddingHorizontal = Math.max(1, fractionOrDetault)
	return { stackWidth, paddingHorizontal }
}

const styles = StyleSheet.create({
	stack: {
		borderRadius: 4,
	},
})

export default StackChart
