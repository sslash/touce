import { useState } from 'react'
import { useStorePushTokenMutation } from '../queries/autogenerate/hooks'
import { useUserConfigs } from '../store/userConfigs'
import { getToken } from '../utils/pushNotifications/getToken'
import { requestUserPermission } from '../utils/pushNotifications/requestPermission'

interface ReturnProps {
	onToggle: () => void
	loading: boolean
	isSyncing: boolean
	isPermissionError: boolean
	hidePermissionError: () => void
	fcmToken?: string
	hasApiError?: boolean
}

export const useGetPushNotificationToken = (): ReturnProps => {
	const { fcmToken, setFcmToken, deleteFcmToken } = useUserConfigs()
	const [mutation, { loading, error: hasApiError }] = useStorePushTokenMutation()
	const [isSyncing, setIsSyncing] = useState(false)
	const [isPermissionError, setIsPermissionError] = useState(false)

	const hidePermissionError = () => setIsPermissionError(false)

	const onToggle = async () => {
		setIsSyncing(true)
		if (fcmToken) {
			deleteFcmToken()
		} else {
			const enabled = await requestUserPermission()
			if (enabled) {
				void execMutation()
			} else {
				setIsPermissionError(true)
			}
		}

		setIsSyncing(false)
	}

	const execMutation = async () => {
		const timezoneOffset = new Date().getTimezoneOffset() / 60
		const token = await getToken()
		if (token) {
			setFcmToken(token)
			void mutation({
				variables: {
					pushToken: token,
					timezoneOffset,
				},
			})
		}
	}

	return {
		onToggle,
		loading,
		fcmToken,
		isSyncing,
		hasApiError: !!hasApiError,
		isPermissionError,
		hidePermissionError,
	}
}
