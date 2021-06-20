import React, { useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { screenWidth } from '../../theme/metrics'

interface Props<T> {
	Component: React.ComponentType<T>
	isCurrent: boolean
	childProps?: T
}

function SceneWrapper<T>({ Component, isCurrent, childProps }: Props<T>): React.ReactElement<T> {
	const hasRendered = useRef(false)

	useEffect(() => {
		if (isCurrent) {
			hasRendered.current = true
		}
	}, [isCurrent])

	return (
		<View style={styles.scene}>
			{isCurrent || hasRendered.current ? <Component {...childProps} /> : null}
		</View>
	)
}

const styles = StyleSheet.create({
	scene: {
		width: screenWidth,
		flex: 1,
	},
})

export default SceneWrapper
