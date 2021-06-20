import React from 'react'
import { View } from 'react-native'
import LoadingOverlay from '../../atoms/LoadingOverlay'
import Switch from '../../atoms/Switch'
import SettingRow from './SettingRow'

interface Props {
	body: string
	isOn: boolean
	onToggle: (isOn: boolean) => void
	heading?: string
	state?: 'loading' | 'disabled' | 'normal'
}

const SwitchSettingRow = ({
	heading,
	body,
	isOn,
	onToggle,
	state = 'normal',
}: Props): JSX.Element => {
	return (
		<SettingRow
			{...{ heading, body }}
			ActionComp={
				<View>
					<Switch
						onValueChange={onToggle}
						isOn={isOn}
						disabled={state === 'disabled' || state === 'loading'}
					/>
					{state === 'loading' && <LoadingOverlay />}
				</View>
			}
		/>
	)
}

export default SwitchSettingRow
