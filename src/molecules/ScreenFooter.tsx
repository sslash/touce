import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import AipomFooter from '../atoms/AipomFooter'
import Spacer from '../atoms/Spacer'
import Caption from '../atoms/texts/Caption'
import { useStrings } from '../localization/localizedStrings'
import { mainHorizontalMargin, screenHeight } from '../theme/metrics'

const ScreenFooterMemoed = memo(
	(): React.ReactElement => {
		const strings = useStrings().strings.navigation

		return (
			<View style={styles.wrapper}>
				<Spacer y={screenHeight * 0.3} />
				<AipomFooter />
				<Caption ta="center" pb={5} color="primaryDeath">
					{strings.screenFooter}
				</Caption>
			</View>
		)
	},
	() => true
)
const styles = StyleSheet.create({
	wrapper: {
		marginHorizontal: -mainHorizontalMargin,
	},
})
export default ScreenFooterMemoed
