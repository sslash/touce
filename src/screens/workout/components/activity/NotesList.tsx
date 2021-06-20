import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import LoadingView from '../../../../atoms/LoadingView'
import Separator from '../../../../atoms/Separator'
import Body from '../../../../atoms/texts/Body'
import { useShiftMode } from '../../../../store'
import { notesFixture } from '../../notes.fixture'

const NotesList = (): React.ReactElement => {
	const { isLiftMode } = useShiftMode()
	const data = notesFixture
	const loading = false

	const renderItem = useCallback(({ item }: { item: { note: string; id: string } }) => {
		return <Body color={isLiftMode ? 'primary20' : 'primaryText'}>{item.note}</Body>
	}, [])

	return (
		<FlatList
			{...{ renderItem, data }}
			removeClippedSubviews
			ListEmptyComponent={loading ? <LoadingView /> : null}
			ItemSeparatorComponent={() => <Separator my={5} />}
			keyExtractor={(item) => item.id}
		/>
	)
}

export default NotesList
