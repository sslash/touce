export interface MusicItem {
	id: string
	imageUri: string
	uri: string
}

export interface Track extends MusicItem {
	albumName: string
	artistName: string
	duration: number
	href: string
	uri: string
	durationSeconds: number
}

export type PlaybackState = 'playing' | 'paused' | 'buffering' | 'idle'
