import React, { PropsWithChildren, useState, useEffect } from 'react'
import { Color } from 'react-native-svg'
import errorHandler from '../utils/errors'
import { load, save } from '../utils/storage/storage'
import darkColors from './darkModeColors'
import lightColors from './lightColors'
import { Colors, ColorTypes } from './types'

const ASYNC_STORAGE_KEY = 'app_color_theme'

export enum Theme {
	Light = 'Light',
	Dark = 'Dark',
	// SynthWave = 'SynthWave', // currently not in use
	NoPreference = 'no-preference',
}

// set default colour scheme from OS
// TODO: listen to dark-mode changes and apply
// const osTheme = Appearance.getColorScheme() as Theme
const osTheme = Theme.Light

interface ThemeObject {
	colors: Colors
	isDark: boolean
}

const getColors = (theme: Theme): ThemeObject => {
	switch (theme) {
		case Theme.Light:
			return { colors: lightColors, isDark: false }

		case Theme.Dark:
			return { colors: darkColors, isDark: true }

		// case Theme.SynthWave:
		//     return { colors: synthWaveColors, dark: true }

		case Theme.NoPreference:
			return { colors: lightColors, isDark: false }
	}
}

interface ThemeState extends ThemeObject {
	theme: Theme
	setTheme: (t: Theme) => void
	getColor: (lm: ColorTypes, dm?: ColorTypes) => void
}

const ManageThemeContext: React.Context<ThemeState> = React.createContext({
	...getColors(osTheme),
	theme: osTheme,
} as ThemeState)

export const useTheme = (): ThemeState => React.useContext(ManageThemeContext)

export const useColor = (lm: ColorTypes, dm?: ColorTypes): Color => {
	const theme = React.useContext(ManageThemeContext)
	return evaluateColor(lm, dm, theme.colors, theme.isDark)
}

export const ThemeManager = ({ children }: PropsWithChildren<any>): JSX.Element | null => {
	const [theme, setTheme] = useState<Theme>(osTheme)
	const { colors, isDark } = getColors(theme)
	const [hasInitialised, setInitialised] = useState(false)

	useEffect(() => {
		init().catch((e) => {
			errorHandler.reportError(e)
		})
	}, [])

	const init = async () => {
		const item = await load<Theme>(ASYNC_STORAGE_KEY)
		if (item) {
			setTheme(item)
		}
		setInitialised(true)
	}

	if (!hasInitialised) {
		return null
	}

	const onSetTheme = async (t: Theme) => {
		setTheme(t)
		await save<Theme>(ASYNC_STORAGE_KEY, t)
	}

	const getColor = (lm: ColorTypes, dm?: ColorTypes) => evaluateColor(lm, dm, colors, isDark)

	return (
		<ManageThemeContext.Provider
			value={{
				colors,
				isDark,
				theme,
				setTheme: onSetTheme,
				getColor,
			}}
		>
			{children}
		</ManageThemeContext.Provider>
	)
}

function evaluateColor(
	lm: ColorTypes,
	dm: ColorTypes,
	colors: Record<ColorTypes, string>,
	isDark: boolean
): Color {
	return (isDark ? colors[dm] : colors[lm]) || colors[lm]
}

export default ThemeManager
