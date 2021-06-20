import { useEffect } from 'react'
import { usePurchase } from './purchase'

export const useFetchOfferings = (): void => {
	const { fetchData } = usePurchase()

	useEffect(() => {
		void fetchData()
	}, [])
}
