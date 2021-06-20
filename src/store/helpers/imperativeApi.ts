import { unstable_batchedUpdates } from 'react-native'
import { State, StoreApi } from 'zustand'

/**
 * State update wrapper to be used outside react environments
 *
 * Usage:
 * ```
 * stateUpdater(useCurrentActivityTimer, (s) => s.setActivityTimer(timer))
 * ```
 * @param store
 * @param cb
 */
export const stateUpdater = <T extends State>(store: StoreApi<T>, cb: (state: T) => void): void => {
	unstable_batchedUpdates(() => cb(store.getState()))
}
