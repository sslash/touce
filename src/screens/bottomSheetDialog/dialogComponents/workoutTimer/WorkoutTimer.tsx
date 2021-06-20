import React from 'react'
import { StyleSheet } from 'react-native'
import V from '../../../../atoms/V'
import { useStrings } from '../../../../localization/localizedStrings'
import TabView from '../../../../molecules/TabView/TabView'
import { mainHorizontalMargin } from '../../../../theme/metrics'
import { DialogChildProps } from '../../types'
import LiftTimer from './LiftTimer'
import RestTimer from './RestTimer'

export interface WorkoutTimerProps extends DialogChildProps {
	isLift?: boolean
}

const WorkoutTimer = ({ isLift, ...dialogProps }: WorkoutTimerProps): React.ReactElement => {
	const { strings } = useStrings()
	const initialIndex = isLift ? 1 : 0

	const scenes = [
		{ title: strings.navigation.podcasts, key: 'podcasts', Component: RestTimer },
		{ title: strings.navigation.music, key: 'music', Component: LiftTimer },
	]
	return (
		<V flex={1}>
			<TabView<DialogChildProps>
				{...{ scenes, initialIndex }}
				isFixed
				headerVariant="level1"
				tabsStyle={styles.tabs}
				headerSpacing={16}
				childProps={dialogProps}
			/>
		</V>
	)
}

const styles = StyleSheet.create({
	tabs: {
		paddingTop: 0,
		paddingHorizontal: mainHorizontalMargin,
	},
})

export default WorkoutTimer
