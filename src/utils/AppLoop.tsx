import { useRunAppLoop } from '../store/appLoop'

export const AppLoop = (): React.ReactElement => {
	useRunAppLoop()

	return null
}
