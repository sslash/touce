interface ViewModel {
	state?: State
	uri: string
	accessibilityLabel: string
	onPress: (uri: string) => void
}
export interface DetailItemViewModel extends ViewModel {
	image: string
	title: string
	subTitle: string
	preTitle: string
}
export interface SimpleItemViewModel extends ViewModel {
	title: string
	subTitle: string
	image: string
}

export type MediaItem = DetailItemViewModel | SimpleItemViewModel

export enum State {
	UpNext = 'upNext',
	UpNextFull = 'upNextFull',
	Addable = 'addable',
	Playable = 'playable',
	Expandable = 'expandable',
	Deletable = 'deletable',
	NA = 'n/a',
}

export enum RowVariant {
	Simple,
	Detailed,
	Compact,
}
