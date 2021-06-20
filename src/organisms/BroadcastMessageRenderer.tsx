import React from 'react'
import Toast from '../molecules/Toast'
import { useBroadcastMessages } from '../store/broadcastMessages'

const BroadcastMessageRenderer = (): React.ReactElement => {
	const { currentMessage, dismissMessage } = useBroadcastMessages()

	if (!currentMessage) {
		return null
	}

	return <Toast {...currentMessage} {...{ dismissMessage }} />
}

export default BroadcastMessageRenderer
