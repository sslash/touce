import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useStrings } from '../../../../localization/localizedStrings'
import TabView from '../../../../molecules/TabView/TabView'
import { screenStyle } from '../constants'
import { FontSize } from '../../../../theme/fonts'
import LiftMenu from './LiftMenu'
import RestMenu from './RestMenu'

const SettingsScreen = (): React.ReactElement => {
	const strings = useStrings().strings.settings

	const scenes = [
		{ title: strings.podcasts, key: 'podcasts', Component: RestMenu },
		{ title: strings.music, key: 'music', Component: LiftMenu },
	]

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<TabView
				{...{ scenes }}
				isFixed
				tabsStyle={styles.tabs}
				tabFontStyle={{ fontSize: FontSize.Lead2 }}
			/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	tabs: {
		...screenStyle,
		marginBottom: 55,
	},
})

export default SettingsScreen
