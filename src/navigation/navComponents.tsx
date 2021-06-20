import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import {
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from 'react-native-screens/lib/typescript/native-stack'
import Row from '../atoms/Row'
import Title from '../atoms/texts/Title'
import { Icon } from '../icons'
import { useStrings } from '../localization/localizedStrings'
import { mainHorizontalMargin } from '../theme/metrics'
import { RootStackParamList } from './types'

type NavProps = NativeStackScreenProps<RootStackParamList>

export const BackButton = ({ navigation }: NavProps): JSX.Element => (
	<Icon icon="chevron-back-outline" fill="primaryText" onPress={() => navigation.goBack()} />
)

export const ModalBackButton = ({ navigation }: NavProps): JSX.Element => (
	<Icon
		icon="chevron-down-outline"
		fill="primaryText"
		style={{ left: -4 }}
		onPress={() => navigation.goBack()}
	/>
)

export const MusicBackButton = (props: NavProps): JSX.Element => (
	<BackWithTitle title={useStrings().strings.navigation.music} {...props} />
)

export const PodcastBackButton = (props: NavProps): JSX.Element => (
	<BackWithTitle title={useStrings().strings.navigation.podcasts} {...props} />
)

export const BackWithTitle = ({
	title,
	...nav
}: {
	title: string
} & NavProps): JSX.Element => (
	<Pressable onPress={() => nav.navigation.goBack()}>
		<Row ai="center">
			<BackButton {...nav} />
			<Title fw="Bold">{title}</Title>
		</Row>
	</Pressable>
)

export const Search = ({ onPress }: { onPress: () => void }): JSX.Element => {
	return <Icon icon="search-outline" fill="primaryText" {...{ onPress }} />
}

export const PodcastSearch = ({ navigation }: NavProps): JSX.Element => {
	const onPress = () => {
		navigation.navigate('PodcastSearch')
	}

	return <Search onPress={onPress} />
}

export const MusicSearch = ({ navigation }: NavProps): JSX.Element => {
	const onPress = () => {
		navigation.navigate('MusicSearch')
	}

	return <Search onPress={onPress} />
}

export const PodcastAndMusicSearch = ({
	navigation,
	route,
}: NativeStackScreenProps<RootStackParamList, 'PodcastAndMusic'>): JSX.Element => {
	const onPress = () => {
		const screen = route.params.isRest ? 'PodcastSearch' : 'MusicSearch'
		navigation.navigate(screen)
	}

	return <Search onPress={onPress} />
}

export const inModal = (Comp: React.ComponentType) => (): JSX.Element => {
	return <View style={styles.inModal}>{<Comp />}</View>
}

export const pushTransparentBack = (props: NavProps): NativeStackNavigationOptions => ({
	headerLeft: () => <BackButton {...props} />,
	headerTranslucent: true,
	headerTitle: null,
	headerStyle: {
		backgroundColor: 'transparent',
	},
})

const styles = StyleSheet.create({
	inModal: {
		marginHorizontal: mainHorizontalMargin - 4,
	},
})
