import React from 'react'
import RadioGroup from '../../../atoms/radioInput/RadioGroup'
import Caption from '../../../atoms/texts/Caption'
import { Theme, useTheme } from '../../../theme/themeContext'
import SettingRowWrapper from '../../workout/components/settings/SettingRowWrapper'
import { SettingProps } from '../types'

const ThemeSetting = ({ strings }: SettingProps): React.ReactElement => {
	const { isDark, setTheme } = useTheme()
	const s = strings.theme

	const items = [Theme.Dark, Theme.Light]
	const itemLabels = [s[items[0]], s[items[1]]]

	const onSetTheme = (index: number) => {
		setTheme(items[index])
	}

	return (
		<SettingRowWrapper icon="color-palette-outline" label={'Theme'}>
			<Caption mb={4} color="secundaryText" fw="DemiBold">
				{s.caption}
			</Caption>
			<RadioGroup
				items={itemLabels}
				selectedIndex={isDark ? 0 : 1}
				onSelectItem={onSetTheme}
				isVertical={false}
			/>
		</SettingRowWrapper>
	)
}

export default ThemeSetting
