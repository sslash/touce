import React from 'react'
import LoadingView from '../atoms/LoadingView'
import EmptyView from './EmptyView'

const FullLoadingView = (): JSX.Element => {
	return (
		<EmptyView>
			<LoadingView />
		</EmptyView>
	)
}

export default FullLoadingView
