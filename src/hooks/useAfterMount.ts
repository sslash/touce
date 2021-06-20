import { useLayoutEffect } from 'react'

export const useAfterMount = (fn: () => void, after = 100): void => {
	useLayoutEffect(() => {
		const timer = setTimeout(fn, after)

		return () => clearTimeout(timer)
	}, [])
}
