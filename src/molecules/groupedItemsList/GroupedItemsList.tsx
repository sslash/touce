import _ from 'lodash'
import React, { useCallback, useRef } from 'react'
import { FlatList, ListRenderItemInfo, StyleSheet, View, ViewStyle } from 'react-native'
import ScalingTapView from '../../atoms/ScalingTapView'
import Body from '../../atoms/texts/Body'
import Title from '../../atoms/texts/Title'
import { mainHorizontalMargin, mainHorizontalMargin as mhm, screenWidth } from '../../theme/metrics'
import { spaceScale } from '../../theme/spacing'
import MediaItemRow from '../mediaList/MediaItemRow'
import { MediaItem, RowVariant } from '../mediaList/types'
import { accentColor } from './constants'

interface Props {
	title: string
	items: MediaItem[]
	variant?: RowVariant
	refreshKey: string[]
	containerStyle?: ViewStyle
	nColumns?: number
	nRows?: number
	onPressHeadingCta: () => void
	headingCtaText: string
}

const groupWidth = screenWidth * 0.88
const GroupedItemsList: React.FC<Props> = ({
	title,
	items,
	nColumns = 4,
	nRows = 3,
	refreshKey,
	variant,
	containerStyle,
	onPressHeadingCta,
	headingCtaText,
}) => {
	const columns = useRef(_.range(0, nColumns))

	const renderItem = useCallback(
		(item: MediaItem) => <MediaItemRow item={item} {...{ variant }} key={item.uri} />,
		refreshKey
	)

	const renderColumn = useCallback(({ index }: ListRenderItemInfo<number>) => {
		const slice = items.slice(index, index + nRows)
		return <View style={styles.column}>{slice.map(renderItem)}</View>
	}, refreshKey)

	return (
		<View style={containerStyle}>
			<View style={styles.heading}>
				<Title>{title}</Title>
				<ScalingTapView onPress={onPressHeadingCta}>
					<Body fw="Bold" color={accentColor}>
						{headingCtaText}
					</Body>
				</ScalingTapView>
			</View>
			<FlatList<number>
				horizontal
				snapToAlignment="start"
				snapToInterval={groupWidth}
				keyExtractor={(item) => `${item}`}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.contentStyle}
				data={columns.current}
				decelerationRate="fast"
				renderItem={renderColumn}
				getItemLayout={(_, index: number) => ({
					length: groupWidth,
					offset: groupWidth * index,
					index,
				})}
				initialNumToRender={2}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	contentStyle: {
		paddingRight: mainHorizontalMargin,
	},
	heading: {
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		marginHorizontal: mainHorizontalMargin,
		paddingBottom: spaceScale[1],
		flexDirection: 'row',
	},
	column: { paddingLeft: mhm, width: groupWidth },
})

export default GroupedItemsList
