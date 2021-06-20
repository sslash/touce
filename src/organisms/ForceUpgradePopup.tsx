import React from 'react'
import { Linking } from 'react-native'
import { useStrings } from '../localization/localizedStrings'
import Popup from '../molecules/popup/Popup'
import config from '../utils/config/config'
import errorHandler from '../utils/errors'
import { createLogger } from '../utils/logger'

const log = createLogger('🔼', 'force-upgrade')
const ForceUpgradePopup = (): React.ReactElement => {
	const onUpgrade = async () => {
		log.log('Upgrade pressed', undefined, true)

		const iosUri = `itms://itunes.apple.com/app/${config.appleAppId}?mt=8`
		const canOpen = await Linking.canOpenURL(iosUri)
		if (canOpen) {
			try {
				await Linking.openURL(iosUri)
				log.log('Sent to app-store', undefined, true)
			} catch (error) {
				errorHandler.reportError(error)
			}
		} else {
			// cant open :(
		}
	}

	const { action, ...strings } = useStrings().strings.forceUpgrade
	return (
		<Popup
			{...strings}
			buttonGroup={{
				primary: {
					label: action,
					onPress: onUpgrade,
				},
			}}
			onExit={onUpgrade}
		/>
	)
}

export default ForceUpgradePopup
