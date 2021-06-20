import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FlatList, ScrollView, TextStyle, View, ViewStyle } from 'react-native'
import Spacer from '../../atoms/Spacer'
import { screenWidth } from '../../theme/metrics'
import Level1TabsRow from './Level1TabsRow'
import Level2TabsRow from './Level2TabsRow'
import SceneWrapper from './SceneWrapper'
import { HeaderVariant, Scene } from './types'

interface Props<T> {
	scenes: Scene<T>[]
	initialIndex?: number
	headerVariant?: HeaderVariant
	isFixed?: boolean
	tabsStyle?: ViewStyle
	tabFontStyle?: TextStyle
	headerSpacing?: number
	childProps?: T
}

function TabView<T>({
	scenes,
	initialIndex = 0,
	headerVariant = 'level2',
	isFixed,
	tabsStyle,
	headerSpacing = 40,
	tabFontStyle,
	childProps,
}: Props<T>): React.ReactElement {
	const [currentIdx, _setCurrentIdx] = useState(initialIndex)
	const ref = useRef<FlatList>(null)

	const setCurrentIdx = (idx: number) => {
		if (!isFixed) {
			ref.current.scrollToIndex({ index: idx, animated: true })
		}
		_setCurrentIdx(idx)
	}

	const renderItem = useCallback(({ item }: { item: Scene<T> }) => {
		return <item.Component {...childProps} />
	}, [])

	const isLevel1 = headerVariant === 'level1'

	return (
		<View style={{ flex: 1 }}>
			{isLevel1 ? (
				<Level1TabsRow {...{ tabsStyle, scenes, currentIdx, setCurrentIdx }} />
			) : (
				<Level2TabsRow
					{...{ tabsStyle, scenes, currentIdx, setCurrentIdx, tabFontStyle }}
				/>
			)}
			<Spacer y={headerSpacing} />
			{isFixed ? (
				renderItem({ item: scenes[currentIdx] })
			) : (
				<FlatList
					ref={ref}
					horizontal
					keyExtractor={(item: Scene<T>) => item.key}
					data={scenes}
					renderItem={renderItem}
					scrollEnabled={false}
					maxToRenderPerBatch={4}
					initialNumToRender={4}
					windowSize={1}
				/>
			)}
		</View>
	)
}

export default TabView
