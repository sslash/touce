import { AppleSearchChannel } from './../../models/podcasts'
import { getGraphqlConfig } from '../../utils/config/graphqlConfig'
import { httpFetch } from '../../utils/httpFetch'
import { AppleSearchResult } from './types'

export async function podcastSearchFn(query: string): Promise<AppleSearchChannel[]> {
	const baseUrl = await getGraphqlConfig<string>('fallbackPodcastSearchApi', 'appleSearchApi')
	const url = encodeURI(`${baseUrl}?term=${query}&entity=podcast`)

	const res = await httpFetch<AppleSearchResult>({ url })

	return res?.results?.filter((p) => p.feedUrl)
}
