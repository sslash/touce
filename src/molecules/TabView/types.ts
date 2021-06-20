export interface Scene<T> {
	title: string
	key: string
	Component: React.ComponentType<T>
}

export type HeaderVariant = 'level1' | 'level2'
