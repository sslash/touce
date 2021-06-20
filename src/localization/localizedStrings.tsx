import React, { useEffect, useState } from 'react'
import LocalizedStrings from 'react-native-localization'
import english from './en'
import norwegian from './no'
import { Strings } from './types'

const allStrings = {
	en: english,
	nb: norwegian,
	nn: norwegian,
}

export const localizedStrings = new LocalizedStrings<Strings>(allStrings)

type AppStrings = typeof localizedStrings

const LocalizationContext = React.createContext({
	strings: localizedStrings,
})

export const useStrings = (): { strings: AppStrings } => {
	const ctx = React.useContext(LocalizationContext)

	return ctx
}

const LocalizationProvider: React.FC = ({ children }) => {
	const [updaterKey, forceUpdate] = useState(Date.now())
	const api = {
		updaterKey,
		strings: localizedStrings,
		setLanguage,
	}

	function setLanguage(lang: keyof typeof allStrings) {
		localizedStrings.setLanguage(lang)
		forceUpdate(Date.now())
	}

	useEffect(() => {
		setLanguage('en')
	}, [])

	return <LocalizationContext.Provider value={api}>{children}</LocalizationContext.Provider>
}

export default LocalizationProvider
