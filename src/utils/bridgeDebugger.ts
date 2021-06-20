/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue.js'

// will console log all events passed over the native bridge.
export function debugBridge(): void {
	const blacklistModules = ['WebSocketModule'] // add more events you dont want here
	const spyFunction = (msg) => {
		if (!blacklistModules.includes(msg.module)) {
			// eslint-disable-next-line no-console
			console.log(msg)
		}
	}

	MessageQueue.spy(spyFunction)
}
