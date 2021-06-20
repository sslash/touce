import React from 'react'
import { ViewStyle } from 'react-native'
import Row from '../../atoms/Row'
import TabItem from './TabItem'
import { Scene } from './types'

interface Props {
	tabsStyle: ViewStyle
	scenes: Scene[]
	currentIdx: number
	setCurrentIdx: (idx: number) => void
}

const Level1TabsRow = ({ tabsStyle, scenes, currentIdx, setCurrentIdx }: Props): JSX.Element => {
	return (
		<Row style={tabsStyle}>
			{scenes.map((scene, index) => (
				<TabItem
					headerVariant="level1"
					{...{ scene, index, currentIdx, setCurrentIdx }}
					key={scene.key}
				/>
			))}
		</Row>
	)
}

export default Level1TabsRow
