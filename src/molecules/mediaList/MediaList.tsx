import React, { useCallback } from 'react'
import { FlatList, FlatListProps, ListRenderItemInfo, StyleSheet, ViewStyle } from 'react-native'
import { mainHorizontalMargin } from '../../theme/metrics'
import ScreenFooterMemoed from '../ScreenFooter'
import MediaItemRow, { getRowHeight } from './MediaItemRow'
import { MediaItem, RowVariant } from './types'

interface Props {
	data: MediaItem[]
	variant?: RowVariant
	refreshKey?: string
	style?: ViewStyle
	showFooter?: boolean
}

const MediaList: React.FC<Props & Omit<FlatListProps<MediaItem>, 'renderItem'>> = ({
	data,
	variant = RowVariant.Detailed,
	refreshKey,
	style,
	showFooter,
	...rest
}) => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<MediaItem>) => <MediaItemRow item={item} {...{ variant }} />,
		[refreshKey]
	)

	const rowHeight = getRowHeight(variant)

	return (
		<FlatList<MediaItem>
			contentContainerStyle={[styles.container, style]}
			data={data}
			renderItem={renderItem}
			keyExtractor={(item) => item.uri}
			getItemLayout={(_, index: number) => {
				return {
					length: rowHeight,
					offset: rowHeight * index,
					index,
				}
			}}
			ListFooterComponentStyle={styles.footer}
			ListFooterComponent={showFooter && <ScreenFooterMemoed />}
			{...rest}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: mainHorizontalMargin,
		flexGrow: 1,
	},
	footer: { flex: 1, justifyContent: 'flex-end' },
})

export default MediaList
