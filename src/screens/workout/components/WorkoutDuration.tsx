import React from 'react'
import { View } from 'react-native'
import Caption from '../../../atoms/texts/Caption'
import { Strings } from '../../../localization/types'
import { useShiftMode } from '../../../store'
import { ColorTypes } from '../../../theme/types'
import WorkoutDurationLabel from './WorkoutDurationLabel'

interface Props {
	strings: Strings['workout']
}

const WorkoutDuration = ({ strings }: Props): React.ReactElement => {
	const { isLiftMode } = useShiftMode()
	const headerColor = isLiftMode ? colorPresets.light.header.lift : colorPresets.light.header.rest
	const labelColor = isLiftMode ? colorPresets.light.label.lift : colorPresets.light.label.rest
	const headerDarkColor = isLiftMode
		? colorPresets.dark.header.lift
		: colorPresets.dark.header.rest
	const labelDarkColor = isLiftMode ? colorPresets.dark.label.lift : colorPresets.dark.label.rest

	return (
		<View>
			<Caption
				fw="Bold"
				color={headerColor}
				darkColor={headerDarkColor}
				op={0.45}
				accessibilityRole="header"
			>
				{strings.duration}
			</Caption>
			<WorkoutDurationLabel color={labelColor} darkColor={labelDarkColor} />
		</View>
	)
}

const colorPresets = {
	dark: {
		header: {
			lift: 'secundary900' as ColorTypes,
			rest: 'primaryText' as ColorTypes,
		},
		label: {
			lift: 'secundary900' as ColorTypes,
			rest: 'primaryText' as ColorTypes,
		},
	},
	light: {
		header: {
			lift: 'secundary50' as ColorTypes,
			rest: 'primaryText' as ColorTypes,
		},
		label: {
			lift: 'secundary100' as ColorTypes,
			rest: 'primaryText' as ColorTypes,
		},
	},
}

export default WorkoutDuration
