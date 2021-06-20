import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, LayoutAnimation, ListRenderItemInfo } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Input from '../../../atoms/input/Input'
import LoadingView from '../../../atoms/LoadingView'
import Spacer from '../../../atoms/Spacer'
import Body from '../../../atoms/texts/Body'
import V from '../../../atoms/V'
import { ApiState } from '../../../hooks/useSearchQuery'
import { podcastSearchFn } from '../../../hooks/useSearchQuery/podcastSearchFn'
import useSearchQuery from '../../../hooks/useSearchQuery/useSearchQuery'
import { useStrings } from '../../../localization/localizedStrings'
import { AppleSearchChannel } from '../../../models/podcasts'
import MediaItemRow from '../../../molecules/mediaList/MediaItemRow'
import { RowVariant, State } from '../../../molecules/mediaList/types'
import Screen from '../../../molecules/screen/Screen'
import { RootStackParamList } from '../../../navigation/types'
import { getLoResChannelImage } from '../../../utils/podcasts/getLoResChannelImage'
import PodcastSearchError from './PodcastSearchError'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'MusicSearch'>
}

const PodcastSearchScreen: React.FC<Props> = ({ navigation }) => {
	const [q, setQ] = useState<string>('')
	const { search, results, apiState } = useSearchQuery<AppleSearchChannel>(podcastSearchFn)
	const s = useStrings().strings.podcastsAndMusic.podcastSearch

	useEffect(() => {
		if (results.length) {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
		}
	}, [results.length])

	const renderItem = useCallback(
		({ item: channel }: ListRenderItemInfo<AppleSearchChannel>) => {
			const image = getLoResChannelImage(channel)

			const onPress = () => {
				// todo select the item first
				navigation.navigate('PodcastChannelDetails', {
					channel: {
						title: channel.collectionName,
						podcastUri: channel.feedUrl,
						imageUri: image,
						publisherName: channel.artistName,
					},
				})
			}

			return (
				<MediaItemRow
					key={channel.feedUrl}
					variant={RowVariant.Simple}
					item={{
						image,
						onPress,
						accessibilityLabel: channel.collectionName,
						title: channel.collectionName,
						subTitle: channel.artistName,
						uri: channel.feedUrl,
						state: State.NA,
					}}
				/>
			)
		},
		[results.length, apiState]
	)

	const onSubmit = () => search(q)

	const hasItems = results.length

	return (
		<Screen stdMargin>
			<V jc={hasItems ? 'flex-start' : 'center'} flex={1} fg={1} width="100%">
				<V style={hasItems && { flex: 1 }}>
					<Body fw="Bold" mb={5}>
						{s.title}
					</Body>
					<Input
						placeholder={s.placeholder}
						autoFocus
						onChangeText={setQ}
						returnKeyType="search"
						onSubmitEditing={onSubmit}
						autoCompleteType="off"
					/>
					<Spacer y={hasItems ? 24 : 82} />
					{apiState === ApiState.Loading ? (
						<LoadingView />
					) : apiState === ApiState.Success ? (
						<FlatList<AppleSearchChannel>
							data={results}
							renderItem={renderItem}
							showsVerticalScrollIndicator={false}
							keyExtractor={(item) => item.feedUrl}
						/>
					) : apiState === ApiState.Error ? (
						<PodcastSearchError strings={s} />
					) : null}
				</V>
			</V>
		</Screen>
	)
}

export default PodcastSearchScreen
