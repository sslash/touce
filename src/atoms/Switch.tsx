import React from 'react'
import { Switch as SwitchNative, SwitchProps } from 'react-native'
import { useTheme } from '../theme/themeContext'

interface Props extends SwitchProps {
	isOn: boolean
	onValueChange: (v: boolean) => void
}

const Switch = ({ isOn, onValueChange }: Props): JSX.Element => {
	const { colors } = useTheme()

	return (
		<SwitchNative
			value={isOn}
			accessibilityRole="switch"
			onValueChange={onValueChange}
			trackColor={{ false: colors.primary500, true: colors.primary500 }}
			thumbColor={colors.primary20}
		/>
	)
}

export default Switch
