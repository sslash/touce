import React from 'react'
import { StyleSheet, View } from 'react-native'
import { screenStyle } from '../constants'
import NotesInput from './NotesInput'
import NotesList from './NotesList'

const ActivityScreen = (): JSX.Element => {
	return (
		<View style={styles.container}>
			<NotesInput />
			<NotesList />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		...screenStyle,
		flex: 1,
		marginTop: 80,
	},
})

export default ActivityScreen
