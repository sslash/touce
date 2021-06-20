import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import Button, { ButtonVariant } from '../../../atoms/Button'
import { Strings } from '../../../localization/types'
import Popup from '../../../molecules/popup/Popup'
import { WorkoutStackParamList } from '../../../navigation/types'
import { useShiftMode } from '../../../store'

interface Props {
	strings: Strings['workout']
}

const FinishButton = (props: Props): React.ReactElement => {
	const strings = props.strings.finishedPopup
	const isLiftMode = useShiftMode().isLiftMode
	const [showFinishedPopup, setShowFinishedPopup] = useState(false)
	const nav = useNavigation<StackNavigationProp<WorkoutStackParamList, 'Workout'>>()
	const onFinish = () => {
		setShowFinishedPopup(false)
		nav.navigate('WorkoutFinished')
	}

	const hidePopup = () => setShowFinishedPopup(false)
	const showPopup = () => setShowFinishedPopup(true)

	const variant = isLiftMode ? ButtonVariant.DarkSludge : ButtonVariant.Sludge

	return (
		<>
			<Button size="small" variant={variant} onPress={showPopup}>
				{props.strings.finish}
			</Button>
			{showFinishedPopup && (
				<Popup
					preHeader={strings.preHeader}
					heading={strings.heading}
					body={strings.body}
					onExit={hidePopup}
					buttonGroup={{
						primary: {
							label: strings.primary,
							onPress: onFinish,
						},
						secundary: {
							label: strings.secundary,
							onPress: hidePopup,
						},
					}}
				/>
			)}
		</>
	)
}

export default FinishButton
