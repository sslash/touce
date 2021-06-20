import { useEffect, useRef } from 'react'

export function useIsMounted(): React.MutableRefObject<boolean> {
	const isMounted = useRef(true)

	useEffect(() => {
		return () => {
			isMounted.current = false
		}
	}, [])

	return isMounted
}
