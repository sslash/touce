import { useEffect, useState } from 'react'
import { useTimeout } from './useTimeout'

export function useOnMount(delayMs: number): boolean {
	const [isMounted, setIsMounted] = useState(false)
	const timeout = useTimeout()

	useEffect(() => {
		timeout.current = setTimeout(() => setIsMounted(true), delayMs)
	}, [])

	return isMounted
}
