import React from 'react'
import { View } from 'react-native'
import Card, { CardVariant } from '../../atoms/Card'
import Row from '../../atoms/Row'
import Caption from '../../atoms/texts/Caption'
import Caption2 from '../../atoms/texts/Caption2'
import Title from '../../atoms/texts/Title'
import Thumbnail from '../../atoms/Thumbnail'
import V from '../../atoms/V'
import ExpandingText from '../../molecules/ExpandingText'
import StatsRow from '../../molecules/statsRow/StatsRow'
import { DateFormat, formatDate } from '../../utils/date'

interface Props {
	item: {
		id: string
		date: string
		feel: string
		restTime: string
		liftTime: string
		duration: string
		calories: string
		distanceInMeters: string
		musicItem: {
			title: string
			image: string
			subTitle: string
		}
		podcasatItem: {
			title: string
			subTitle: string
			image: string
		}
	}
}

const WorkoutHistoryRow = ({ item }: Props): JSX.Element => {
	const subTitle = `Beef cake  ·  248 calories  ·  5k   ·  😁`
	const statsItems = [
		{
			label: 'Duration',
			value: '31m 12s',
		},
		{
			label: 'Podcasts',
			value: '21m 12s',
		},
		{
			label: 'Music',
			value: '11m 12s',
		},
	]

	const notes = `Rising detail tightly fence reader glad visitor saved chance whom are principle better rise subject table phrase or swim ask visit steel fill wool. Rising detail tightly fence reader glad visitor saved chance whom are principle better rise subject table phrase or swim ask visit steel fill wool`

	return (
		<V>
			<Title>{formatDate(item.date, DateFormat.MediumDate)}</Title>
			<Caption>{subTitle}</Caption>
			<V my={5}>
				<StatsRow {...{ statsItems }}></StatsRow>
			</V>
			<Card variant={CardVariant.Outline} size="small" mb={5}>
				<View>
					<Row mb={5}>
						<Thumbnail
							variant="bordered"
							source={{
								uri:
									'https://images.unsplash.com/photo-1502245710654-231542d3e73c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW4lMjBtdXNpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
							}}
						></Thumbnail>
						<V ml={3}>
							<Caption2 color="primaryText">The Pitch</Caption2>
							<Caption fw="DemiBold" color="primaryText">
								We chat with Slack develoeprs about...
							</Caption>
						</V>
					</Row>

					<Row>
						<Thumbnail
							variant="bordered"
							source={{
								uri:
									'https://images.unsplash.com/photo-1618706757451-25bd95a5cf1d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
							}}
						></Thumbnail>
						<V ml={3}>
							<Caption2 color="primaryText">Playlist</Caption2>
							<Caption fw="DemiBold" color="primaryText">
								This is guetta
							</Caption>
						</V>
					</Row>
				</View>
			</Card>

			<ExpandingText heading="Notes:">{notes}</ExpandingText>
		</V>
	)
}

export default WorkoutHistoryRow
