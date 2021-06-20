import { useExposedTo } from '../store'

interface ReturnType {
	hasSeenOnboarding: boolean
	setHasSeenOnboarding: () => void
}

export const useHasSeenOnboarding = (): ReturnType => {
	const { onboarding, update } = useExposedTo()

	const setHasSeenOnboarding = () => {
		update('onboarding', true)
	}

	return { hasSeenOnboarding: onboarding, setHasSeenOnboarding }
}
