import { RouteProp } from '@react-navigation/core'
import React from 'react'
import EmojiSelector from 'react-native-emoji-selector'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import { SludgeVariant } from '../../atoms/sludges'
import Spacer from '../../atoms/Spacer'
import Screen from '../../molecules/screen/Screen'
import { RootStackParamList } from '../../navigation/types'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'EmojiSelector'>
	route: RouteProp<RootStackParamList, 'EmojiSelector'>
}

const EmojiSelectorScreen: React.FC<Props> = ({ navigation, route }) => {
	const { headerTitle, headerSubTitle, onSelect } = route.params

	const _onSelect = (emoji: string) => {
		onSelect(emoji)
		navigation.goBack()
	}

	return (
		<Screen
			stdMargin
			backButtonStyle="push"
			navigation={navigation}
			sludge={SludgeVariant.Wailmer}
			sludgeStyle={{ top: 12 }}
			preset={'fixed'}
			headerTitle={headerTitle}
			headerSubTitle={headerSubTitle}
		>
			<Spacer y={62} />
			<EmojiSelector onEmojiSelected={_onSelect} />
		</Screen>
	)
}

export default EmojiSelectorScreen
