import React, { useEffect, useState } from 'react'
import { LayoutAnimation } from 'react-native'
import Input from '../../../atoms/input/Input'
import Body from '../../../atoms/texts/Body'
import Caption from '../../../atoms/texts/Caption'
import V from '../../../atoms/V'
import EmptyView from '../../../molecules/EmptyView'
import MediaList from '../../../molecules/mediaList/MediaList'
import { RowVariant, State } from '../../../molecules/mediaList/types'

const EmptyPodcastScreen = (): React.ReactElement => {
	const [query, onSearchChange] = useState('')
	const [shouldShowItems, setShouldShowItems] = useState(false)
	const title = 'Add your first podcast 👇'
	const subTitle = `We suggest you try Shift with just one show,${'\n'}then add more if you like it!`

	useEffect(() => {
		if (query.length > 2 && !shouldShowItems) {
			LayoutAnimation.easeInEaseOut()
			setShouldShowItems(true)
		}
	}, [shouldShowItems, setShouldShowItems, query])

	const mappedShows = shows.map((s) => ({
		...s,
		state: State.Addable,
		accessibilityLabel: s.title,
		subTitle: `${s.numberOfEpisodes} episodes`,
	}))

	return (
		<EmptyView>
			<V mb={7} mt={shouldShowItems ? 5 : 0}>
				<V mb={6}>
					<Body fw="Bold" mb={1}>
						{title}
					</Body>
					<Caption lh={22} mb={6}>
						{subTitle}
					</Caption>

					<Input placeholder="Search for a show..." onChangeText={onSearchChange} />
				</V>
				{shouldShowItems && (
					<MediaList
						data={mappedShows}
						variant={RowVariant.Simple}
						style={{ paddingHorizontal: 0 }}
					/>
				)}
			</V>
		</EmptyView>
	)
}

const shows = [
	{
		title: 'The Pitch',
		onPress: (s: string) => null,
		uri: 'foo.com',
		numberOfEpisodes: 22,
		image:
			'https://images.megaphone.fm/RwFyKYZ1oewHxgfxVZbhSEh4bWMy03pz6AHtSni8SAw/plain/s3://megaphone-prod/podcasts/82b23c10-036f-11e7-a0d5-93cc4ab2a1be/image/uploads_2F1591157280997-pnmuedjjoqq-4cc4a392eb655d0bc45533bf5ed5b714_2FThePitch-2019.jpg',
	},
	{
		title: 'Mind Pump',
		onPress: (s: string) => null,
		uri: 'foo2.com',
		numberOfEpisodes: 122,
		image:
			'https://images.megaphone.fm/RwFyKYZ1oewHxgfxVZbhSEh4bWMy03pz6AHtSni8SAw/plain/s3://megaphone-prod/podcasts/82b23c10-036f-11e7-a0d5-93cc4ab2a1be/image/uploads_2F1591157280997-pnmuedjjoqq-4cc4a392eb655d0bc45533bf5ed5b714_2FThePitch-2019.jpg',
	},
	{
		title: 'Making of America',
		onPress: (s: string) => null,
		uri: 'foo3.com',
		numberOfEpisodes: 22,
		image:
			'https://images.megaphone.fm/RwFyKYZ1oewHxgfxVZbhSEh4bWMy03pz6AHtSni8SAw/plain/s3://megaphone-prod/podcasts/82b23c10-036f-11e7-a0d5-93cc4ab2a1be/image/uploads_2F1591157280997-pnmuedjjoqq-4cc4a392eb655d0bc45533bf5ed5b714_2FThePitch-2019.jpg',
	},
]
export default EmptyPodcastScreen
