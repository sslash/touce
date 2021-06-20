import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import Row from '../atoms/Row'
import Caption from '../atoms/texts/Caption'
import Secundary from '../atoms/texts/Secundary'
import { Icon } from '../icons'
export interface FixedItem {
	title: string
	body: string
}

interface Props<T> {
	data: T[] | FixedItem[]
	keyGenerator: (item: T, index: number) => string
	renderItem?: (item: T, index: number) => JSX.Element
	rowStyle?: ViewStyle
	tickVariant?: 'numbered' | 'checkmark'
	sparklingLast?: boolean
}

const marginWidth = 34

function isFixedItem<T>(item: T | FixedItem): item is FixedItem {
	return !!(item as FixedItem).title
}

function TickedItemsList<T>({
	data,
	keyGenerator,
	renderItem,
	rowStyle,
	tickVariant = 'numbered',
	sparklingLast,
}: Props<T>): React.ReactElement {
	const isNumbered = tickVariant === 'numbered'

	return (
		<View>
			{data.map((item, index: number) => {
				const showSparkle = sparklingLast && index === data.length - 1
				return (
					<Row key={keyGenerator(item, index)} style={rowStyle} ai="center">
						<View style={styles.marginWrapper}>
							{isNumbered ? (
								<>
									{showSparkle && <Text style={styles.sparkle}>🌟</Text>}
									<Secundary fw="Bold">{index + 1}</Secundary>
								</>
							) : (
								<Icon name="checkmark-outline" />
							)}
						</View>
						{isFixedItem(item) ? (
							<View style={{ flex: 1 }}>
								<Secundary fw="DemiBold">{item.title}</Secundary>
								<Caption>{item.body}</Caption>
							</View>
						) : (
							renderItem(item, index)
						)}
					</Row>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	marginWrapper: {
		width: marginWidth,
	},
	sparkle: {
		position: 'absolute',
		fontSize: 34,
		left: -13,
		top: -9,
	},
})

export default TickedItemsList
