import React, { useEffect, useRef } from 'react'
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import Indicator from './Indicator'
import TabItem from './TabItem'
import { Scene } from './types'

interface Props<T> {
	tabsStyle: ViewStyle
	scenes: Scene<T>[]
	currentIdx: number
	setCurrentIdx: (idx: number) => void
	initialIndex?: number
	tabFontStyle?: TextStyle
}

function Level2TabsRow<T>({
	tabsStyle,
	scenes,
	currentIdx,
	setCurrentIdx,
	initialIndex = 0,
	tabFontStyle,
}: Props<T>): JSX.Element {
	const ref = useRef()
	const measures = useRef(scenes.map(() => ({ width: 0, x: 0 })))
	const width = useSharedValue(0)
	const x = useSharedValue(0)

	useEffect(() => {
		moveIndicatorTo(currentIdx)
	}, [currentIdx])

	const moveIndicatorTo = (idx: number) => {
		width.value = measures.current[idx].width
		x.value = measures.current[idx].x
	}

	const onMeasure = (r: React.RefObject<View>, index: number) => {
		r.current?.measureLayout(
			ref.current,
			(_x, _, _width) => {
				measures.current[index] = {
					x: _x,
					width: _width,
				}

				if (index === initialIndex) {
					moveIndicatorTo(initialIndex)
				}
			},
			() => null
		)
	}

	return (
		<View style={[styles.row, tabsStyle]} ref={ref}>
			{scenes.map((scene, index) => (
				<TabItem
					key={scene.key}
					onMeasure={onMeasure}
					headerVariant="level2"
					{...{ scene, index, currentIdx, setCurrentIdx, tabFontStyle }}
				/>
			))}

			<Indicator {...{ x, width }} />
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
})

export default Level2TabsRow
