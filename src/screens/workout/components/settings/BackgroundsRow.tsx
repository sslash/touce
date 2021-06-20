import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import MediaImage, { MediaImageVariant } from '../../../../atoms/MediaImage'
import ScalingTapView from '../../../../atoms/ScalingTapView'
import V from '../../../../atoms/V'
import { useTheme } from '../../../../theme/themeContext'
import SettingRowWrapper from './SettingRowWrapper'
import { RowType } from './types'

const backgrounds = [
	'https://images.unsplash.com/photo-1621430089578-74fb0cb2993a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1541028466927-aa1205f96603?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1548338383-989b5e8dd244?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vYmlsZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1584968153986-3f5fe523b044?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3QlMjBkYXJrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1512433155034-67102234a5e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFic3RyYWN0JTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
	'https://images.unsplash.com/photo-1536675572774-1b66ac2e26e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFic3RyYWN0JTIwZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
]

const BackgroundsRow = ({ strings }: RowType): React.ReactElement => {
	const [selectedIndex, setSelectedIndex] = useState<number>(null)
	const { colors } = useTheme()

	return (
		<SettingRowWrapper icon="color-palette-outline" label={strings.backgrounds}>
			<V style={styles.wrapper}>
				{backgrounds.map((uri, index) => {
					const isSelected = index === selectedIndex
					const style = isSelected
						? [styles.selected, { borderColor: colors.primary200 }]
						: styles.nonSelected
					return (
						<ScalingTapView onPress={() => setSelectedIndex(index)} key={uri}>
							<MediaImage uri={uri} variant={MediaImageVariant.Tall} style={style} />
						</ScalingTapView>
					)
				})}
			</V>
		</SettingRowWrapper>
	)
}

const margin = 8
const styles = StyleSheet.create({
	selected: {
		borderWidth: 4,
		margin,
	},
	nonSelected: {
		margin,
	},
	wrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
})

export default BackgroundsRow
