import React, { useState } from 'react'
import withRenderAfterInteraction from '../../../hocs/withRenderAfterInteraction'
import { useStrings } from '../../../localization/localizedStrings'
import EmptyView from '../../../molecules/EmptyView'
import FullLoadingView from '../../../molecules/FullLoadingView'
import PlaylistsView from './components/PlaylistsView'
import { musicItems } from './tests/musicItems.fixture'

interface Props {
	isLoading: boolean
	isError: boolean
}

const MusicDiscoverScreen = ({ isLoading, isError }: Props): JSX.Element => {
	const [selected, setSelected] = useState(0)
	const { errors } = useStrings().strings.podcastsAndMusic

	const onReconnect = () => {}

	switch (true) {
		case isLoading:
			return <FullLoadingView />
		case isError:
			return <EmptyView {...errors.fetchSpotify} onPress={onReconnect}></EmptyView>
		default:
			return <PlaylistsView items={musicItems} {...{ selected, setSelected }} />
	}
}
export default withRenderAfterInteraction(MusicDiscoverScreen)
