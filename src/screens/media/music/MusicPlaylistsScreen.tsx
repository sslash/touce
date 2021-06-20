import React, { useState } from 'react'
import withRenderAfterInteraction from '../../../hocs/withRenderAfterInteraction'
import PlaylistsView from './components/PlaylistsView'
import { musicItems } from './tests/musicItems.fixture'

interface Props {}

const MusicPlaylistsScreen = ({}: Props): JSX.Element => {
	const [selected, setSelected] = useState(0)

	return <PlaylistsView items={musicItems} {...{ selected, setSelected }} />
}

export default withRenderAfterInteraction(MusicPlaylistsScreen)
