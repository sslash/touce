export function delay<T>(fn: () => T, timeout = 1): Promise<T> {
	return new Promise((resolve) => {
		return setTimeout(() => {
			return resolve(fn())
		}, timeout)
	})
}
