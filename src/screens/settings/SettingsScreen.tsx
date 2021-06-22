import React from 'react'
import { View } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Card from '../../atoms/Card'
import { SludgeVariant } from '../../atoms/sludges'
import Spacer from '../../atoms/Spacer'
import Caption from '../../atoms/texts/Caption'
import { useStrings } from '../../localization/localizedStrings'
import Screen from '../../molecules/screen/Screen'
import { RootStackParamList } from '../../navigation/types'
import config from '../../utils/config/config'
import { showNativeRatingDialog } from '../../utils/rate'
import { showNativeShareDialog } from '../../utils/share'
import { cardSpace } from '../workout/components/settings/constants'
import SettingRowWrapper from '../workout/components/settings/SettingRowWrapper'
import AccountSetting from './components/AccountSetting'
import AppVersionString from './components/AppVersionString'
import AsyncStorageSetting from './components/AsyncStorageSetting'
import PushNotificationsSetting from './components/PushNotificationsSetting'
import ThemeSetting from './components/ThemeSetting'
interface Props {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>
}

const SettingsScreen = ({ navigation }: Props): React.ReactElement => {
	const s = useStrings().strings.settings
	const settingProps = { strings: s, navigation }
	const onShiftPlus = () => navigation.navigate('Paywall')

	const onRate = () => showNativeRatingDialog()
	const onShare = () => showNativeShareDialog()
	const onAppTracking = () => navigation.navigate('AppTracking')
	const makeWebViewLink = (uri: string) => () =>
		navigation.navigate('WebView', {
			uri,
		})

	return (
		<Screen
			navigation={navigation}
			backButtonStyle="push"
			testID="Settings"
			sludge={SludgeVariant.Ditto}
			preset={'scroll'}
			stdMargin
			headerTitle={s.title}
		>
			<View style={{ paddingVertical: 32 }}>
				<Card needsViewWrapping>
					<AccountSetting {...settingProps} />
					<ThemeSetting {...settingProps} />
					<SettingRowWrapper
						icon="gift-outline"
						label={'Shift Plus'}
						onPress={onShiftPlus}
					/>
					<AsyncStorageSetting {...settingProps} />
					<PushNotificationsSetting {...settingProps} />
				</Card>

				<Spacer y={cardSpace} />

				<Card needsViewWrapping>
					<SettingRowWrapper icon="star-outline" label={s.rate} onPress={onRate} />
					<SettingRowWrapper icon="share-outline" label={s.share} onPress={onShare} />
					<SettingRowWrapper
						icon="chatbox-outline"
						label={s.feedback}
						onPress={makeWebViewLink(config.feedbackUri)}
					/>
					<SettingRowWrapper
						icon="color-wand-outline"
						label={s.whatsNew}
						isLast
						onPress={makeWebViewLink(config.whatsNewUri)}
					/>
				</Card>

				<Spacer y={cardSpace} />

				<Card needsViewWrapping>
					<SettingRowWrapper
						icon="cloud-circle-outline"
						label={s.appTracking}
						onPress={onAppTracking}
					/>
					<SettingRowWrapper
						icon="newspaper-outline"
						label={s.openSource}
						onPress={makeWebViewLink(config.openSource)}
					/>
					<SettingRowWrapper
						icon="document-text-outline"
						label={s.terms}
						onPress={makeWebViewLink(config.termsUrl)}
					/>
					<SettingRowWrapper
						icon="document-text-outline"
						label={s.privacy}
						isLast
						onPress={makeWebViewLink(config.privacyUrl)}
					/>
				</Card>

				<Spacer y={cardSpace} />
				<AppVersionString />
			</View>
		</Screen>
	)
}

export default SettingsScreen
