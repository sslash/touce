import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native'
import Bg from '../../atoms/Bg'
import { Sludge, SludgeVariant } from '../../atoms/sludges'
import Body from '../../atoms/texts/Body'
import Lead2 from '../../atoms/texts/Lead2'
import V from '../../atoms/V'
import { appleMusicFullLogo, musicImageWall, shiftFullLogo, spotifyFullLogo } from '../../images'
import Screen from '../../molecules/screen/Screen'
import SmoothCornerView from '../../nativeModules/SmoothCornerView'
import lightColors from '../../theme/lightColors'
import { mainHorizontalMargin, screenWidth } from '../../theme/metrics'
import MusicSourceItem from './MusicSourceItem'

interface Props {}

const SetMusicSourceScreen = ({}: Props): JSX.Element => {
	const context = 'MUSIC CONNECT'
	const title = 'Bring your own workout music'

	return (
		<Screen preset="fixed" unsafe>
			<Bg bg="darkBg" flex={1}>
				<Image
					source={musicImageWall as ImageSourcePropType}
					resizeMode="cover"
					style={styles.imageWall}
				/>

				<Sludge variant={SludgeVariant.Lickitung} style={styles.sludge} />
				<V ai="center" style={styles.inner}>
					<View style={styles.heading}>
						<Body color="primary75" ta="center" fw="DemiBold" mb={2}>
							{context}
						</Body>
						<Lead2 color="background" style={styles.title} mb={6}>
							{title}
						</Lead2>
					</View>
					<SmoothCornerView style={styles.itemsWrapper}>
						<View>
							<MusicSourceItem source={spotifyFullLogo} style={styles.topItem} />
							<MusicSourceItem
								source={appleMusicFullLogo}
								hasBorder
								style={styles.midItem}
							/>
							<MusicSourceItem source={shiftFullLogo} style={styles.bottomItem} />
						</View>
					</SmoothCornerView>
				</V>
			</Bg>
		</Screen>
	)
}

const verticalMargin = 36

const styles = StyleSheet.create({
	imageWall: { width: '100%', opacity: 0.2 },
	itemsWrapper: {
		borderRadius: verticalMargin,
		padding: verticalMargin,
		width: screenWidth - mainHorizontalMargin * 2,
		backgroundColor: lightColors.background,
	},
	sludge: {
		bottom: -50,
		top: null,
		alignItems: 'center',
		transform: [{ rotate: '180deg' }],
	},
	inner: { top: -38, flex: 1 },
	title: { maxWidth: 280, textAlign: 'center' },
	heading: { flexGrow: 1 },
	topItem: { marginBottom: verticalMargin },
	midItem: { marginVertical: verticalMargin },
	bottomItem: { marginTop: verticalMargin },
})
export default SetMusicSourceScreen
