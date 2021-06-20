import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, LayoutAnimation, ListRenderItemInfo } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Input from '../../../atoms/input/Input'
import LoadingView from '../../../atoms/LoadingView'
import Spacer from '../../../atoms/Spacer'
import Body from '../../../atoms/texts/Body'
import V from '../../../atoms/V'
import { useStrings } from '../../../localization/localizedStrings'
import MediaItemRow from '../../../molecules/mediaList/MediaItemRow'
import { RowVariant, State } from '../../../molecules/mediaList/types'
import Screen from '../../../molecules/screen/Screen'
import { RootStackParamList } from '../../../navigation/types'
import { musicItems } from './tests/musicItems.fixture'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'MusicSearch'>
}
interface MusicItem {
	title: string
	imageUri: string
	subTitle: string
	preTitle: string
}

const MusicSearchScreen: React.FC<Props> = ({ navigation }) => {
	const [q, setQ] = useState('')
	const [items, setItems] = useState([])
	const isLoading = false
	const strings = useStrings().strings.podcastsAndMusic.musicSearch

	useEffect(() => {
		if (q.length > 3) {
			LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
			setItems(musicItems)
		}
	}, [q])

	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<MusicItem>) => {
			const onPress = () => {
				// todo select the item first
				navigation.goBack()
			}

			return (
				<MediaItemRow
					key={item.title}
					variant={RowVariant.Detailed}
					item={{
						title: item.title,
						image: item.imageUri,
						subTitle: item.subTitle,
						preTitle: item.preTitle,
						uri: 'fakeuri.com',
						onPress,
						state: State.NA,
					}}
				/>
			)
		},
		[items.length]
	)

	const hasItems = items.length

	return (
		<Screen stdMargin>
			<V jc={hasItems ? 'flex-start' : 'center'} flex={1} fg={1} width="100%">
				<V style={hasItems && { flex: 1 }}>
					<Body fw="Bold" mb={5}>
						{strings.title}
					</Body>
					<Input placeholder={strings.placeholder} autoFocus onChangeText={setQ} />
					<Spacer y={hasItems ? 24 : 82} />
					{isLoading ? (
						<LoadingView />
					) : (
						<FlatList<MusicItem>
							data={items}
							renderItem={renderItem}
							showsVerticalScrollIndicator={false}
							keyExtractor={(item) => item.title}
						/>
					)}
				</V>
			</V>
		</Screen>
	)
}

export default MusicSearchScreen
