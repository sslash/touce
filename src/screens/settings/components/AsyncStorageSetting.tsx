import React, { useEffect, useState } from 'react'
import Caption from '../../../atoms/texts/Caption'
import Caption2 from '../../../atoms/texts/Caption2'
import V from '../../../atoms/V'
import { FeatureFlags, useIsEnabled } from '../../../hooks/useFeatureFlags'
import { EXPOSED_TO, AUTH_TOKEN, USER_CONFIGS } from '../../../utils/storage/keys'
import { loadString } from '../../../utils/storage/storage'
import SettingRowWrapper from '../../workout/components/settings/SettingRowWrapper'
import { SettingProps } from '../types'

const keysToDebug = [AUTH_TOKEN, EXPOSED_TO, USER_CONFIGS]

const AsyncStorageSetting = ({ strings }: SettingProps): React.ReactElement => {
	const s = strings.myData
	const [debugData, setDebugData] = useState([])

	useEffect(() => {
		void readData()
	}, [])

	const readData = async () => {
		const values = await Promise.all(keysToDebug.map(loadString))
		setDebugData(values)
	}

	return (
		<SettingRowWrapper icon="server-outline" label={s.label}>
			{debugData.map((data, i) => (
				<V key={keysToDebug[i]} mb={1}>
					<Caption fw="DemiBold">{keysToDebug[i]}</Caption>
					<Caption2>
						{JSON.stringify(data, null, '\t')
							.replace(/,/g, '\n')
							.replace(/"/g, '')
							.replace(/\\/g, '')
							.replace(/}/g, '')
							.replace(/{/g, '\n')}
					</Caption2>
				</V>
			))}
		</SettingRowWrapper>
	)
}

const AsyncStorageSettingGuard = (props: SettingProps): React.ReactElement => {
	const hasDebugModeEnabled = useIsEnabled(FeatureFlags.DEBUG_MODE)
	if (!hasDebugModeEnabled && !__DEV__) {
		return null
	}

	return <AsyncStorageSetting {...props} />
}

export default AsyncStorageSettingGuard
