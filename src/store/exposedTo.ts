import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { EXPOSED_TO } from '../utils/storage/keys'
import { onStoreHydration } from './helpers/storeHydration'
import { AppStore } from './types'

interface ExposedToFlags {
	onboarding: boolean
	workoutOnboarding: boolean
	workoutFreezed: boolean
	headphoneShift: boolean
}

interface AdvancedFlags {
	lastAskedToRate: {
		date: number
		didRate: boolean
	}
}

type ExposedToState = AppStore &
	ExposedToFlags &
	AdvancedFlags & {
		update: (key: keyof ExposedToFlags, value?: boolean) => void
		updateAskedToRate: (lastDate: number, didRate: boolean) => void
	}

export const useExposedTo = create<ExposedToState>(
	persist(
		(set) => ({
			onboarding: false,
			workoutOnboarding: false,
			workoutFreezed: false,
			headphoneShift: false,
			lastAskedToRate: {
				date: null,
				didRate: false,
			},
			update: (key, value = true) => {
				set(() => ({
					[key]: value,
				}))
			},
			updateAskedToRate: (date: number, didRate: boolean) =>
				set(() => ({
					lastAskedToRate: {
						date,
						didRate,
					},
				})),
		}),
		{
			name: EXPOSED_TO,
			getStorage: () => AsyncStorage, // (optional) by default the 'localStorage' is used
			onRehydrateStorage: () => onStoreHydration(),
		}
	)
)
