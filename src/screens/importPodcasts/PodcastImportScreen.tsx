import React from 'react'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import LoadingView from '../../atoms/LoadingView'
import { SludgeVariant } from '../../atoms/sludges'
import V from '../../atoms/V'
import Screen from '../../molecules/screen/Screen'
import { RootStackParamList } from '../../navigation/types'

interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'PodcastImport'>
}

const PodcastImportScreen = ({ navigation }: Props): React.ReactElement => {
	return (
		<Screen
			navigation={navigation}
			testID="ImportPodcastsScreen"
			sludge={SludgeVariant.Ditto}
			preset={'scroll'}
			backButtonStyle="push"
			stdMargin
			sludgeStyle={{ top: -75 }}
			headerTitle={'Immporting podcasts...'}
		>
			<V p={6} ai="center" jc="center">
				<LoadingView />
			</V>
		</Screen>
	)
}

export default PodcastImportScreen
