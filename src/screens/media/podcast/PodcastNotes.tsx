import React from 'react'
import { StyleSheet, View } from 'react-native'
import Body from '../../../atoms/texts/Body'
import Secundary from '../../../atoms/texts/Secundary'
import { useStrings } from '../../../localization/localizedStrings'
import { mainHorizontalMargin } from '../../../theme/metrics'
import { sectionLabelColor } from './constants'

const PodcastNotes = (): React.ReactElement => {
	const { strings } = useStrings()
	return (
		<View style={styles.container}>
			<Secundary fw="Bold" color={sectionLabelColor} mb={2}>
				{strings.podcastsAndMusic.notes}
			</Secundary>
			<Body color="grey500" lh={22}>
				{dummyNotes}
			</Body>
		</View>
	)
}
const dummyNotes =
	'harbor individual new produce name youth fight silent lay habit cage affect cry amount shoulder rice call whistle softly rest play tropical father should. \n\n consonant correct well act box refer walk oil rising doctor lonely copy fifteen rich circle neck food opinion chamber interest unknown happily second capital'

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: mainHorizontalMargin,
		paddingBottom: 48,
	},
})
export default PodcastNotes
