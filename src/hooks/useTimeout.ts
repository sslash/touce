import { useEffect, useRef } from 'react'

export const useTimeout = (): React.MutableRefObject<number> => {
	const timeout = useRef<number>(null)

	useEffect(() => {
		return () => {
			if (timeout.current) {
				clearTimeout(timeout.current)
			}
		}
	}, [])

	return timeout
}
