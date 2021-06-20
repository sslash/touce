import React from 'react'
import Spacer from '../../atoms/Spacer'
import Lead from '../../atoms/texts/Lead'
import Secundary from '../../atoms/texts/Secundary'
import V from '../../atoms/V'
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup'
import PopupSceleton from './PopupSceleton'

export interface PopupProps {
	preHeader: string
	heading: string
	body: string
	buttonGroup: ButtonGroupProps
	onExit: () => void
}

const Popup = ({ preHeader, onExit, heading, body, buttonGroup }: PopupProps): JSX.Element => {
	return (
		<PopupSceleton onExit={onExit}>
			<V p={6} ai="center">
				<Secundary color="primary500" fw="DemiBold" mb={2}>
					{preHeader}
				</Secundary>
				<Lead fw="Fat" ta="center">
					{heading}
				</Lead>
				<Spacer y={30} />
				<Secundary mb={7} mt={5} ta="center" lh={28}>
					{body}
				</Secundary>

				<ButtonGroup buttons={buttonGroup} />
			</V>
		</PopupSceleton>
	)
}

export default Popup
