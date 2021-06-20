import React from 'react'
import Button, { ButtonVariant } from '../../atoms/Button'
import SettingRow from './SettingRow'

interface Props {
	body: string
	onPress: () => void
	buttonLabel: string
	heading?: string
}

const ButtonSettingRow = ({ heading, body, buttonLabel, onPress }: Props): JSX.Element => {
	return (
		<SettingRow
			{...{ heading, body }}
			ActionComp={
				<Button variant={ButtonVariant.Outline} size="small" onPress={onPress}>
					{buttonLabel}
				</Button>
			}
		/>
	)
}

export default ButtonSettingRow
