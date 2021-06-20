import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { spaceScale } from '../theme/spacing'

export const useBottomNotchSpace = (): number => {
	return useSafeAreaInsets().bottom === 0 ? spaceScale[5] : 0
}
