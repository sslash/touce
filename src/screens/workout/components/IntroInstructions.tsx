import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import SlideIn from '../../../animations/SlideIn'
import Ellipse from '../../../atoms/Ellipse'
import Caption from '../../../atoms/texts/Caption'
import { useTimeout } from '../../../hooks/useTimeout'
import { Strings } from '../../../localization/types'
import Popup from '../../../molecules/popup/Popup'
import Tooltip from '../../../molecules/tooltip/Tooltip'
import { useExposedTo } from '../../../store'
import { shadows } from '../../../theme/shadows'
import { useTheme } from '../../../theme/themeContext'

interface Props {
	strings: Strings['workout']
}

const IntroInstructions = ({ strings }: Props): React.ReactElement => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [shouldRender, setShouldRender] = useState(false)
	const { isDark } = useTheme()
	const timeout = useTimeout()
	const exposedTo = useExposedTo()
	const s = strings.headphoneShift

	useEffect(() => {
		if (!exposedTo.headphoneShift) {
			renderAfterTimeout()
		}
	}, [])

	const renderAfterTimeout = () => {
		timeout.current = setTimeout(() => {
			setShouldRender(true)
		}, 5000)
	}

	if (exposedTo.headphoneShift || !shouldRender) {
		return null
	}

	const onPress = () => setIsModalOpen(true)

	const onHide = () => {
		setIsModalOpen(false)
		exposedTo.update('headphoneShift', true)
	}

	return (
		<>
			<SlideIn from="top">
				<Pressable {...{ onPress }}>
					<Ellipse
						size={45}
						bg={isDark ? 'noModeLight' : 'primary50'}
						style={shadows.default}
					>
						<Ellipse bg="error" size={20}>
							<Caption color="noModeLight" fw="Bold" lh={20}>
								i
							</Caption>
						</Ellipse>
						<Tooltip
							onPress={onPress}
							size="small"
							wrapperStyle={styles.wrapper}
							tooltipContent={
								<Caption color="primary50" fw="DemiBold">
									{s.instructions}
								</Caption>
							}
						></Tooltip>
					</Ellipse>
				</Pressable>
			</SlideIn>
			{isModalOpen && (
				<Popup
					preHeader={s.tip}
					heading={s.heading}
					body={s.body}
					buttonGroup={{
						primary: {
							onPress: onHide,
							label: s.button,
						},
					}}
					onExit={onHide}
				/>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	wrapper: { top: 16, width: 320, alignItems: 'center' },
})

export default IntroInstructions
