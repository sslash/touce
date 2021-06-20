import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from '../theme/themeContext'
import ScalingTapView from './ScalingTapView'
import Bg from './Bg'

interface Props {
	onPress: () => void
	testID?: string
	hasHaptic?: boolean
	isSelected: boolean
}

const SelectableRow: React.FC<Props> = ({
	children,
	onPress,
	testID,
	hasHaptic = true,
	isSelected,
}) => {
	const { colors } = useTheme()

	const bg = isSelected ? 'primary20' : 'background'
	const bgDark = isSelected ? 'primary100' : 'primary50'
	const borderColor = isSelected ? 'primary50' : 'transparent'

	return (
		<ScalingTapView onPress={onPress} {...{ hasHaptic, testID }}>
			<Bg
				{...{ bg, bgDark, borderColor }}
				style={[styles.row, { shadowColor: colors.primaryDeath }]}
			>
				{children}
			</Bg>
		</ScalingTapView>
	)
}

const styles = StyleSheet.create({
	row: {
		paddingHorizontal: 26,
		paddingVertical: 15,
		width: '100%',
		borderRadius: 48,
		borderWidth: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.06,
		shadowRadius: 20,
		elevation: 5,
	},
})
export default SelectableRow
