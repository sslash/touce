import React, { useCallback, useState } from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native'
import CircularThumbnail from '../../../../molecules/CircularThumbnail'
import { mainHorizontalMargin } from '../../../../theme/metrics'
import { spaceScale } from '../../../../theme/spacing'

interface Props {
	items: MusicItem[]
	isLoading: boolean
	errorMessage?: string
}

interface MusicItem {
	imageUri: string
	title: string
	subTitle: string
}

const PlaylistsView = ({ items }: Props): JSX.Element => {
	const [selected, setSelected] = useState(0)

	const renderItem = useCallback(
		({ item, index }: ListRenderItemInfo<MusicItem>) => {
			return (
				<CircularThumbnail
					imageUri={item.imageUri}
					title={item.title}
					subTitle={item.subTitle}
					onPress={() => setSelected(index)}
					isSelected={index === selected}
					style={styles.thumb}
				/>
			)
		},
		[selected]
	)

	return (
		<FlatList
			numColumns={3}
			data={items}
			renderItem={renderItem}
			keyExtractor={(item: MusicItem): string => item.imageUri}
			columnWrapperStyle={styles.columns}
			style={styles.list}
		/>
	)
}

const styles = StyleSheet.create({
	list: {
		marginHorizontal: mainHorizontalMargin - 6,
	},
	columns: { justifyContent: 'space-between' },
	thumb: {
		marginTop: spaceScale[5],
	},
})

export default PlaylistsView
