import React, { useState } from 'react'

import { StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import Countdown from '../../../animations/Countdown'
import Row from '../../../atoms/Row'
import ShiftSwitch from '../../../atoms/ShiftSwitch'
import Spacer from '../../../atoms/Spacer'
import V from '../../../atoms/V'
import { useStrings } from '../../../localization/localizedStrings'
import CircularProgressAndTimerLabelMemoed from './CircularProgressAndTimerLabel'
import { screenStyle } from './constants'
import FinishButton from './FinishButton'
import IntroInstructions from './IntroInstructions'
import WorkoutDuration from './WorkoutDuration'
import WorkoutMediaFooter from './WorkoutMediaFooter'

const ShiftScreen = (): JSX.Element => {
	const [renderIntro, setRenderIntro] = useState(true)
	const strings = useStrings().strings.workout

	const onIntroCounterFinished = () => {
		setRenderIntro(false)
	}

	const childProps = { strings }

	return (
		<View style={styles.container}>
			<Row jc="space-between" mt={2}>
				<WorkoutDuration {...childProps} />
				<IntroInstructions {...childProps} />
				<FinishButton {...childProps} />
			</Row>
			<V flex={1}>
				<Spacer y={78} />
				<CircularProgressAndTimerLabelMemoed />
				<V ai="center" mt={6}>
					<ShiftSwitch {...childProps} />
				</V>
			</V>
			<SafeAreaView style={{ paddingBottom: 16 }}>
				<WorkoutMediaFooter />
			</SafeAreaView>
			{renderIntro && <Countdown onFinished={onIntroCounterFinished} />}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		...screenStyle,
	},
})

export default ShiftScreen
