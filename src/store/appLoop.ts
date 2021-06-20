import { useEffect, useRef } from 'react'
import { useAllAppStores } from '.'
import { useTimeout } from '../hooks/useTimeout'

export function useRunAppLoop(): void {
	const timer = useTimeout()
	const sessionStartedTimestampMillis = useRef<number>(Date.now())
	const allStores = useAllAppStores()

	useEffect(() => {
		runLoop()
	}, [])

	function runLoop() {
		timer.current = setInterval(onAppLoop, 1000)
	}

	function onAppLoop() {
		const sessionDurationSeconds = Math.floor(
			(Date.now() - sessionStartedTimestampMillis.current) / 1000
		)

		allStores.forEach((store) => {
			if (store.hasOwnProperty('onAppLoop')) {
				store.onAppLoop(sessionDurationSeconds)
			}
		})
	}
}
