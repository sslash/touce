import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import ShinyImage from '../../atoms/ShinyImage'
import Spacer from '../../atoms/Spacer'
import Body from '../../atoms/texts/Body'
import Title from '../../atoms/texts/Title'
import { screenWidth } from '../../theme/metrics'
import { createImageId } from '../../utils/sharedElement'

interface Props {
	imageUri: string
	subTitle: string
	title: string
	PlaybackControlComponent: JSX.Element
	ProgressComponent: JSX.Element
}

const NowPlayingView: React.FC<Props> = ({
	imageUri,
	subTitle,
	title,
	PlaybackControlComponent,
	ProgressComponent,
	children,
}) => {
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.scrollContent}
			showsVerticalScrollIndicator={false}
		>
			<SharedElement id={createImageId(imageUri)} style={styles.imageWrapper}>
				<ShinyImage uri={imageUri} />

				<Title fw="Bold" ta="center" mb={2}>
					{title}
				</Title>
				<Body fw="DemiBold" ta="center" color="primary600">
					{subTitle}
				</Body>
			</SharedElement>

			<Spacer y={24} />
			{PlaybackControlComponent}
			<Spacer y={16} />

			{ProgressComponent}
			<Spacer y={32} />
			{children}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: screenWidth,
	},
	scrollContent: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageWrapper: { alignItems: 'center' },
})

export default NowPlayingView
