import { unstable_batchedUpdates } from 'react-native'
import { useExposedTo } from '..'

let onResolve: (_: unknown) => void

const promiseVal = new Promise((resolve) => {
	onResolve = resolve
})

//
// hack to force a Zustand hydration
// since the lib currently has no elegant
// way of doing this.
// see https://github.com/pmndrs/zustand/labels/middleware%2Fpersist
//
export const onStoreHydration = (): void => {
	onResolve(undefined)
}

export const waitForStoreHydration = (): Promise<void> => {
	unstable_batchedUpdates(useExposedTo.getState)

	return new Promise((resolve) => {
		void promiseVal.then(resolve)
	})
}
