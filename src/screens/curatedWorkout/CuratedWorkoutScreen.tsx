import React from 'react'
import { StyleSheet, View } from 'react-native'
import Badge from '../../atoms/Badge'
import Card, { CardVariant } from '../../atoms/Card'
import Row from '../../atoms/Row'
import { SludgeVariant } from '../../atoms/sludges'
import Spacer from '../../atoms/Spacer'
import Lead2 from '../../atoms/texts/Lead2'
import Secundary from '../../atoms/texts/Secundary'
import T from '../../atoms/texts/T'
import V from '../../atoms/V'
import { useStrings } from '../../localization/localizedStrings'
import Screen from '../../molecules/screen/Screen'
import SwitchSettingRow from '../../molecules/settings/SwitchSettingRow'
import StackChart from '../../molecules/stackChart/StackChart'
import { FontWeight } from '../../theme/fonts'

interface Props {}

const CuratedWorkoutScreen = ({}: Props): JSX.Element => {
	const strings = useStrings().strings.curatedWorkouts
	const workoutTitle = `MIXED${'\n'} INTERVALS`
	const overviewBody =
		'Nearly market locate branch congress leaf heat must sweet local bring empty lunch customs street factor lost draw machinery driving piano potatoes seeing stone'

	const items = [
		{ value: 90, isRest: true },
		{ value: 240, isRest: false },
		{ value: 90, isRest: true },
		{ value: 240, isRest: false },
		{ value: 90, isRest: true },
		{ value: 240, isRest: false },
		{ value: 90, isRest: true },
		{ value: 240, isRest: false },
		{ value: 90, isRest: true },
	]
	return (
		<Screen sludge={SludgeVariant.Unown} preset="scroll">
			<V ai="center" mt={5}>
				<Secundary fw="DemiBold" color="primary500">
					{strings.heading}
				</Secundary>
				<T style={styles.title}>{workoutTitle}</T>
				<Row>
					<Badge label="35m podcast"></Badge>
					<Spacer x={24} />
					<Badge label="15m music" color="primaryText"></Badge>
				</Row>
			</V>
			<V mhm>
				<Spacer y={sectionSpace * 1.5} />

				<Lead2 fw="Bold">{strings.overview}</Lead2>
				<Secundary lh={30} color="grey500">
					{overviewBody}
				</Secundary>

				<Spacer y={sectionSpace} />

				<StackChart items={items} />

				<Spacer y={sectionSpace} />
				<Lead2 fw="Bold" mb={4}>
					{strings.settings}
				</Lead2>
				<Card variant={CardVariant.Outline}>
					<View>
						<SwitchSettingRow
							heading="Audio cues"
							body="Play messages such as “2 minutes remaining”"
						/>
						<Spacer y={28} />
						<SwitchSettingRow
							heading="Audio cues"
							body="Play messages such as “2 minutes remaining”"
						/>
					</View>
				</Card>
				<Spacer y={sectionSpace} />

				<Lead2 fw="Bold">{strings.activityTitle}</Lead2>
				<Secundary lh={30} color="grey500">
					{strings.activityBody}
				</Secundary>

				<Spacer y={sectionSpace * 2} />
			</V>
		</Screen>
	)
}

const sectionSpace = 80

const styles = StyleSheet.create({
	title: {
		fontSize: 40,
		fontWeight: FontWeight.Fat,
		textAlign: 'center',
		marginBottom: 22,
	},
})
export default CuratedWorkoutScreen
