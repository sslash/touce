import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import { Strings } from '../../localization/types'
import { RootStackParamList } from '../../navigation/types'

export interface SettingProps {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>
	strings: Strings['settings']
}
