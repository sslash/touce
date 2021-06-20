import React from 'react'
import ForceUpgradePopup from '../organisms/ForceUpgradePopup'
import { useBootstrapQuery } from '../queries/autogenerate/hooks'
import { useFetchOfferings } from '../store/purchase/useFetchOfferings'

const AppBootstrap = (): React.ReactElement => {
	const bootstrap = useBootstrapQuery()
	useFetchOfferings()

	const upgradeNeeded = bootstrap.data?.appConfig.upgradeNeeded

	if (upgradeNeeded) {
		return <ForceUpgradePopup />
	}

	return null
}

export default AppBootstrap
