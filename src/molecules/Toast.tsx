import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SlideIn from '../animations/SlideIn'
import Bg from '../atoms/Bg'
import Body from '../atoms/texts/Body'
import { Icon } from '../icons'
import { screenWidth } from '../theme/metrics'
import { shadows } from '../theme/shadows'
import { ColorTypes } from '../theme/types'

interface Props {
	message: string
	bg?: ColorTypes
	color?: ColorTypes
	dismissMessage: () => void
}

const Toast = ({
	message,
	bg = 'primary700',
	color = 'primary20',
	dismissMessage,
}: Props): React.ReactElement => {
	const { top } = useSafeAreaInsets()
	return (
		<SlideIn style={styles.container} from="top">
			<Bg {...{ bg }} style={[styles.background, { paddingTop: top }]}>
				<Pressable onPress={dismissMessage} style={styles.row}>
					<Body color={color} fw="DemiBold" style={{ flex: 1 }}>
						{message}
					</Body>
					<Icon
						icon="close-outline"
						fill={color}
						style={{ paddingHorizontal: 16 }}
						onPress={dismissMessage}
					/>
				</Pressable>
			</Bg>
		</SlideIn>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
	},
	background: {
		width: screenWidth,
		paddingHorizontal: 16,
		paddingBottom: 12,
		...shadows.default,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})

export default Toast
