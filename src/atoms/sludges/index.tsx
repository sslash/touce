import React from 'react'
import { StatusBar, StyleSheet, View, ViewStyle } from 'react-native'
import AipomSludge from './Aipom'
import ArbokSludge from './Arbok'
import CarpetSludge from './Carpet'
import DittoSludge from './Ditto'
import MinccinoSludge from './Minccino'
import SpiderLinesComp from './SpiderLines'
import SunSludge from './Sun'
import WailmerSludge from './Wailmer'
import DustoxSludge from './Dustox'
import LickitungSludge from './Lickitung'
import UnownSludge from './Unown'
import LaprasSludge from './Lapras'
import FadedOverlayFooter from '../FadedOverlayFooter'
import { useTheme } from '../../theme/themeContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { defaultHeight } from './constants'

export enum SludgeVariant {
	Ditto = 1,
	SpiderLines,
	Arbok,
	Aipom,
	Minccino,
	Wailmer,
	Carpet,
	Sun,
	Dustox,
	Lickitung,
	Unown,
	Lapras,
}

interface Props {
	variant: SludgeVariant
	style?: ViewStyle
	isFaded?: boolean
}

export const Sludge = ({ variant, style, isFaded }: Props): JSX.Element => {
	const { isDark } = useTheme()
	const top = useSafeAreaInsets().top || StatusBar.currentHeight
	const allStyles = StyleSheet.flatten([styles.wrapper, {top: -top, height: defaultHeight}, isFaded && styles.faded, style])
	return (
		<View style={allStyles}>
			{getSludge(variant, isDark)}
			{isFaded && <FadedOverlayFooter variant="full" gradientScale="strong" />}
		</View>
	)
}

const getSludge = (variant: SludgeVariant, isDark: boolean) => {
	switch (variant) {
		case SludgeVariant.Ditto:
			return <DittoSludge {...{ isDark }} />

		case SludgeVariant.SpiderLines:
			return <SpiderLinesComp {...{ isDark }} />

		case SludgeVariant.Arbok:
			return <ArbokSludge {...{ isDark }} />

		case SludgeVariant.Aipom:
			return <AipomSludge {...{ isDark }} />

		case SludgeVariant.Minccino:
			return <MinccinoSludge {...{ isDark }} />

		case SludgeVariant.Wailmer:
			return <WailmerSludge {...{ isDark }} />

		case SludgeVariant.Carpet:
			return <CarpetSludge {...{ isDark }} />

		case SludgeVariant.Sun:
			return <SunSludge {...{ isDark }} />

		case SludgeVariant.Dustox:
			return <DustoxSludge {...{ isDark }} />

		case SludgeVariant.Lickitung:
			return <LickitungSludge {...{ isDark }} />

		case SludgeVariant.Unown:
			return <UnownSludge {...{ isDark }} />

		case SludgeVariant.Lapras:
			return <LaprasSludge {...{ isDark }} />

		default:
			return null
	}
}

const styles = StyleSheet.create({
	wrapper: { position: 'absolute', top: 0, left: 0, right: 0, justifyContent: 'center', overflow: 'hidden' },
	faded: { opacity: 0.8 },
})
