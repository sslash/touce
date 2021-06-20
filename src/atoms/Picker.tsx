import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Picker as NativePicker } from '@react-native-picker/picker'
import { FontFamily, FontWeight } from '../theme/fonts'
import { useTheme } from '../theme/themeContext'
import { PickerProps as NativePickerProps } from '@react-native-picker/picker/typings/Picker'

export type PickerValue = number | string
export interface PickerData {
	label: string
	value: PickerValue
}

export interface PickerProps {
	variant: PickerVariant
	items: PickerData[]
	onValueChange: NativePickerProps['onValueChange']
	selectedValue: PickerValue
	enabled?: boolean
}

export enum PickerVariant {
	Large = 'large',
	Default = 'default',
	Small = 'small',
}

const Picker = ({
	items,
	variant,
	onValueChange,
	selectedValue,
	enabled = true,
}: PickerProps): JSX.Element => {
	const colors = useTheme().colors

	return (
		<View>
			<NativePicker
				selectedValue={selectedValue}
				onValueChange={onValueChange}
				enabled={enabled}
				style={styles[variant]}
				itemStyle={[itemStyles[variant], { color: colors.primaryText }]}
			>
				{items.map(({ label, value }) => (
					<NativePicker.Item label={label} value={value} key={value} />
				))}
			</NativePicker>
		</View>
	)
}

const itemStyles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles
	large: {
		fontFamily: FontFamily.Default,
		fontSize: 36,
		fontWeight: FontWeight.Bold,
	},
	// eslint-disable-next-line react-native/no-unused-styles
	default: {
		fontFamily: FontFamily.Default,
		fontSize: 26,
		fontWeight: FontWeight.Bold,
	},
	// eslint-disable-next-line react-native/no-unused-styles
	small: {
		fontFamily: FontFamily.Default,
		fontSize: 18,
		fontWeight: FontWeight.Bold,
	},
})

const styles = StyleSheet.create({
	// eslint-disable-next-line react-native/no-unused-styles

	// eslint-disable-next-line react-native/no-unused-styles
	default: {},
	// eslint-disable-next-line react-native/no-unused-styles
	large: {},
	// eslint-disable-next-line react-native/no-unused-styles
	small: {
		width: 100,
	},
})

export default Picker
