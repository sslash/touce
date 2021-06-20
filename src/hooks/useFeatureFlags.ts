import { useBootstrapQuery } from '../queries/autogenerate/hooks'
import { BootstrapQuery } from '../queries/autogenerate/operations'

export enum FeatureFlags {
	PAYWALL_VARIATION = 'PAYWALL_VARIATION',
	DEBUG_MODE = 'DEBUG_MODE',
}

export const useFeatureFlags = (): BootstrapQuery['appConfig']['featureFlags'] => {
	const res = useBootstrapQuery()

	return res.data?.appConfig.featureFlags || []
}

export const useIsEnabled = (flag: FeatureFlags): boolean => {
	const flags = useFeatureFlags()
	return flags.find(({ id }) => id === flag)?.isOn ?? false
}
