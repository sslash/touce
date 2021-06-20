export interface AppleSearchChannel {
	feedUrl: string
	artistName: string // "Sal Di Stefano, Adam Schafer, Justin Andrews, Doug Egge",
	collectionName: string // "Mind Pump: Raw Fitness Truth",
	artworkUrl100?: string //"https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/35/f2/2e/35f22e28-2bc8-0f6c-f599-7062673a629a/mza_16177954186228176022.jpg/100x100bb.jpg",
	artworkUrl30?: string // "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/35/f2/2e/35f22e28-2bc8-0f6c-f599-7062673a629a/mza_16177954186228176022.jpg/30x30bb.jpg",
	artworkUrl60?: string // "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/35/f2/2e/35f22e28-2bc8-0f6c-f599-7062673a629a/mza_16177954186228176022.jpg/60x60bb.jpg",
	artworkUrl600?: string // "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/35/f2/2e/35f22e28-2bc8-0f6c-f599-7062673a629a/mza_16177954186228176022.jpg/600x600bb.jpg",
	collectionCensoredName: string // "Mind Pump: Raw Fitness Truth",
	collectionExplicitness: string
	collectionHdPrice: number
	collectionId: number
	collectionPrice: number
	collectionViewUrl: string
	contentAdvisoryRating: string
	country: string // "USA",
	currency: string // "USD",
	genreIds: unknown[]
	genres: unknown[]
	kind: 'podcast'
	primaryGenreName: string
	releaseDate: string // "2021-06-07T00:00:00Z",
	trackCensoredName: string
	trackCount: number // 1580,
	trackExplicitness: string
	trackHdPrice: number
	trackHdRentalPrice: number
	trackId: number
	trackName: string
	trackPrice: number
	trackRentalPrice: number
	trackViewUrl: string
	wrapperType: string
}

export interface XmlFeedChannel {}

export interface EpisodeFromApi {
	title: string
	episodeUri: string
	description: string
	imageUri: string
	published: string
	channelTitle: string
	channelUri: string
	durationSeconds: string
	duration: string
	channelImageUri: string
}

export type PersistedEpisode = EpisodeFromApi & {
	isFromApollo?: boolean
}

export interface ChannelFromApi {
	title: string
	podcastUri: string
	imageUri: string
	publisherName?: string
}

export type PersistedChannel = Pick<ChannelFromApi, 'title' | 'podcastUri' | 'imageUri'>
