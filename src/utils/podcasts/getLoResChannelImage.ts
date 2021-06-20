import { AppleSearchChannel } from '../../models/podcasts'

export function getLoResChannelImage(channel: AppleSearchChannel): string {
	return channel.artworkUrl100 || channel.artworkUrl600
}
