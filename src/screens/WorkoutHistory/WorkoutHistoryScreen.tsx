import React, { useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Separator from '../../atoms/Separator'
import V from '../../atoms/V'
import { useStrings } from '../../localization/localizedStrings'
import Screen from '../../molecules/screen/Screen'
import { RootStackParamList } from '../../navigation/types'
import WorkoutHistoryRow from './WorkoutHistoryRow'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'WorkoutHistory'>
}

const WorkoutHistoryScreen = ({ navigation }: Props): JSX.Element => {
	const strings = useStrings().strings.signup

	const renderItem = useCallback(
		({ item }) => {
			return <WorkoutHistoryRow item={item} />
		},
		[data.length]
	)

	return (
		<Screen
			testID="WorkoutHistory"
			stdMargin
			{...{ navigation }}
			backButtonStyle="push"
			headerTitle="History"
			preset="fixed"
		>
			<FlatList
				data={data}
				contentContainerStyle={{ paddingTop: 48 }}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => `${item.id}`}
				ItemSeparatorComponent={() => (
					<V height={82} jc="center">
						<Separator color="primaryTransparent100" />
					</V>
				)}
			/>
		</Screen>
	)
}

const data = [
	{
		id: 1337,
		date: '2021-01-22',
		feel: 'GREAT',
		restTime: 240,
		liftTime: 360,
		duration: 600,
		calories: 220,
		distanceInMeters: 314,
		musicItem: {
			title: 'David Guetta',
			image: 'https://episodes.castos.com/davidguetta/images/COVER-PODCAST.png',
			subTitle: 'Playlist',
		},
		podcasatItem: {
			title: 'TED Radio Hour',
			subTitle: "TED's Idea Search: Cloe Shasha Brooks",
			image:
				'https://media.npr.org/assets/img/2021/01/21/trh_ideas_search_artwork_wide-381ba63e29357ff9a416cf6bb8c02547df538249.jpg?s=1400',
		},
	},
	{
		id: 1338,
		date: '2021-01-21',
		feel: 'GREAT',
		restTime: 240,
		liftTime: 360,
		duration: 600,
		calories: 220,
		distanceInMeters: 314,
		beetrootActivityType: 37,
		musicItem: {
			title: 'David Guetta',
			image: 'https://episodes.castos.com/davidguetta/images/COVER-PODCAST.png',
			subTitle: 'Playlist',
		},
		podcasatItem: {
			title: 'TED Radio Hour',
			subTitle: "TED's Idea Search: Cloe Shasha Brooks",
			image:
				'https://media.npr.org/assets/img/2021/01/21/trh_ideas_search_artwork_wide-381ba63e29357ff9a416cf6bb8c02547df538249.jpg?s=1400',
		},
	},
	{
		id: 1339,
		date: '2021-01-21',
		feel: 'GREAT',
		restTime: 240,
		liftTime: 360,
		duration: 600,
		musicItem: {
			title: 'David Guetta',
			image: 'https://episodes.castos.com/davidguetta/images/COVER-PODCAST.png',
			subTitle: 'Playlist',
		},
		podcasatItem: {
			title: 'TED Radio Hour',
			subTitle: "TED's Idea Search: Cloe Shasha Brooks",
			image:
				'https://media.npr.org/assets/img/2021/01/21/trh_ideas_search_artwork_wide-381ba63e29357ff9a416cf6bb8c02547df538249.jpg?s=1400',
		},
		notes:
			'further crop nodded bow equator star mice fast size clean suit offer fireplace floating replace single who exist distance halfway sudden should hungry settle',
	},
]

export default WorkoutHistoryScreen
