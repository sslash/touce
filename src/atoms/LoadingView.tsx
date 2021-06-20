import React from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../theme/themeContext'

interface Props {
	accessibilityLabel?: string
	safeArea?: boolean
}

const LoadingView = ({ accessibilityLabel = 'Loader', safeArea }: Props): JSX.Element => {
	const { colors, isDark } = useTheme()

	const Child = (
		<ActivityIndicator
			color={isDark ? colors.primary400 : colors.primaryTransparent600}
			{...{ accessibilityLabel }}
		/>
	)

	return safeArea ? <SafeAreaView>{Child}</SafeAreaView> : Child
}

export default LoadingView
