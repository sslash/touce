import React from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import Bg from './Bg'
import LoadingView from './LoadingView'

interface Props {
	isModal?: boolean
	accessibilityLabel?: string
}

const LoadingOverlay = ({ isModal, accessibilityLabel }: Props): React.ReactElement => {
	if (isModal) {
		return (
			<Modal visible transparent animationType="fade">
				<Bg bg="lightTransparent800" flex={1} ai="center" jc="center">
					<LoadingView />
				</Bg>
			</Modal>
		)
	} else {
		return (
			<View style={styles.loadingOverlay}>
				<LoadingView {...{ accessibilityLabel }} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	loadingOverlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default LoadingOverlay
