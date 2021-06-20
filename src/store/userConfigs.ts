import AsyncStorage from '@react-native-async-storage/async-storage'
import create, { State } from 'zustand'
import { persist } from 'zustand/middleware'
import { USER_CONFIGS } from '../utils/storage/keys'

interface UserConfigsState extends State {
	fcmToken: string
	allowTracking: boolean
	setFcmToken: (fcmToken: string) => void
	deleteFcmToken: () => void
	toggleAllowTracking: () => void
}

export const useUserConfigs = create<UserConfigsState>(
	persist(
		(set) => ({
			fcmToken: null,
			allowTracking: true,
			setFcmToken: (fcmToken: string) => set({ fcmToken }),
			deleteFcmToken: () => set({ fcmToken: null }),
			toggleAllowTracking: () => set((s) => ({ allowTracking: !s.allowTracking })),
		}),
		{
			name: USER_CONFIGS,
			getStorage: () => AsyncStorage,
		}
	)
)
