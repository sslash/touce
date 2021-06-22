import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Button from '../../atoms/Button'
import CircularShiftTimer from '../../atoms/circularTimer/CircularShiftTimer'
import Row from '../../atoms/Row'
import { SludgeVariant } from '../../atoms/sludges'
import Spacer from '../../atoms/Spacer'
import Body from '../../atoms/texts/Body'
import V from '../../atoms/V'
import { Icon } from '../../icons'
import { useStrings } from '../../localization/localizedStrings'
import Screen from '../../molecules/screen/Screen'
import TabView from '../../molecules/TabView/TabView'
import { RootStackParamList } from '../../navigation/types'
import { FontSize } from '../../theme/fonts'
import { mainHorizontalMargin } from '../../theme/metrics'
import { shadows } from '../../theme/shadows'
import { responsive } from '../../theme/utils'
import MusicTimer from './MusicTimer'
import PodcastTimer from './PodcastTimer'

const EditTimerScreen = (): JSX.Element => {
	const { strings } = useStrings()
	const nav = useNavigation<StackNavigationProp<RootStackParamList, 'EditTimer'>>()

	const onContinue = () => {}
	const onChangeName = () => {
		nav.navigate('ActivityTimerName')
	}
	const onTrash = () => {}

	const scenes = [
		{ title: strings.navigation.podcasts, key: 'podcasts', Component: PodcastTimer },
		{ title: strings.navigation.music, key: 'music', Component: MusicTimer },
	]

	const name = '🦍 Beefcake'

	return (
		<Screen
			testID="EditTimerScreen"
			sludge={SludgeVariant.Lapras}
			sludgeStyle={{top: responsive({xl: 0}, -20)}}
			preset={'fixed'}
		>
			<Row jc="space-between" mt={4}>
				<V width={iconSize}></V>
				<V mt={3}>
					<CircularShiftTimer
						size={87}
						strokeWidth={22}
						dontAnimate
						strokeLinecap="round"
						style={styles.circularTimer}
					/>
					<Body fw="Bold">{name}</Body>
				</V>
				<View style={styles.icons}>
					<Icon icon="trash-outline" fill="primaryText" scale={0.85} onPress={onTrash} />
					<Spacer y={18} />
					<Icon
						icon="pencil-outline"
						fill="primaryText"
						scale={0.85}
						onPress={onChangeName}
					/>
				</View>
			</Row>

			<View style={styles.container}>
				<TabView
					scenes={scenes}
					tabsStyle={styles.tab}
					headerSpacing={16}
					isFixed
					tabFontStyle={styles.tabFont}
				/>
			</View>

			<SafeAreaView style={styles.footer}>
				<Button onPress={onContinue} hasHaptic>
					{strings.navigation.save}
				</Button>
			</SafeAreaView>
		</Screen>
	)
}

const iconSize = 44
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	circularTimer: {
		...shadows.default,
		marginBottom: 18,
	},

	icons: { width: iconSize },
	tab: { justifyContent: 'center', marginTop: 70 },
	footer: { marginHorizontal: mainHorizontalMargin },
	tabFont: { fontSize: FontSize.Title },

})

export default EditTimerScreen
