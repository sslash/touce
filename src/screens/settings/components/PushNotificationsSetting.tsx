import React from 'react'
import { Linking } from 'react-native'
import { useGetPushNotificationToken } from '../../../hooks/useGetPushNotificationToken'
import SettingError from '../../../molecules/settings/SettingError'
import SwitchSettingRow from '../../../molecules/settings/SwitchSettingRow'
import errorHandler from '../../../utils/errors'
import { createLogger } from '../../../utils/logger'
import SettingRowWrapper from '../../workout/components/settings/SettingRowWrapper'
import { SettingProps } from '../types'

const log = createLogger('📣', 'push-settings')

const PushNotificationsSetting = ({ strings }: SettingProps): React.ReactElement => {
	const {
		onToggle,
		loading,
		hidePermissionError,
		fcmToken,
		isSyncing,
		isPermissionError,
		hasApiError: apiError,
	} = useGetPushNotificationToken()
	const s = strings.pushNotifications

	const onOpenSettings = () => {
		hidePermissionError()
		Linking.canOpenURL('app-settings:')
			.then((supported) => {
				if (supported) {
					return Linking.openURL('app-settings:')
				} else {
					log.log('Failed to open settings', undefined, true)
				}
			})
			.catch(errorHandler.reportError)
	}

	const dialogError = {
		...s.error.popup,
		buttonGroup: {
			primary: {
				label: s.error.popup.primaryAction,
				onPress: onOpenSettings,
			},
			secundary: {
				label: s.error.popup.secundaryAction,
				onPress: hidePermissionError,
			},
		},
		onExit: hidePermissionError,
	}

	const isLoading = isSyncing || loading

	return (
		<SettingRowWrapper icon="notifications-outline" label={s.label} isLast>
			<SwitchSettingRow
				body={s.body}
				isOn={!!fcmToken}
				onToggle={onToggle}
				state={isLoading ? 'loading' : 'normal'}
			/>
			<SettingError
				errorLabel={apiError && s.error.apiError}
				dialogError={isPermissionError && dialogError}
			/>
		</SettingRowWrapper>
	)
}

export default PushNotificationsSetting
