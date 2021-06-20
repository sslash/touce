import React, { PropsWithChildren, useEffect } from 'react'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { useShiftMode } from '../../store'

interface IsLiftingContext {
	isLiftingAnimValue: Animated.SharedValue<boolean>

	// handy state variables & functions
	isLiftMode: boolean
	forcedShift: () => void
}

const ManageThemeContext: React.Context<IsLiftingContext> = React.createContext({
	isLiftingAnimValue: null,
	isLiftMode: null,
	forcedShift: null,
})

export const useIsLiftingAnimatedValue = (): IsLiftingContext =>
	React.useContext(ManageThemeContext)

export const IsLiftingAnimatedManager = ({
	children,
}: PropsWithChildren<any>): JSX.Element | null => {
	const { isLiftMode, forcedShift } = useShiftMode()

	const isLiftingAnimValue = useSharedValue(isLiftMode)

	useEffect(() => {
		isLiftingAnimValue.value = isLiftMode
	}, [isLiftMode])

	return (
		<ManageThemeContext.Provider
			value={{
				isLiftingAnimValue,
				isLiftMode,
				forcedShift,
			}}
		>
			{children}
		</ManageThemeContext.Provider>
	)
}

export default IsLiftingAnimatedManager
