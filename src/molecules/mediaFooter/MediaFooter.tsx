import React from 'react'
import { StyleSheet } from 'react-native'
import Bg from '../../atoms/Bg'
import MediaImage, { MediaImageVariant } from '../../atoms/MediaImage'
import Row from '../../atoms/Row'
import ScalingTapView from '../../atoms/ScalingTapView'
import Caption from '../../atoms/texts/Caption'
import V from '../../atoms/V'
import { borderRadiusScale } from '../../theme/metrics'
import { shadows } from '../../theme/shadows'
import { ColorTypes } from '../../theme/types'

interface Props {
	image: string
	title: string
	subTitle: string
	isLiftMode: boolean
	PlayPauseIcon: React.ComponentType<{ fill: ColorTypes }>
	SkipIcon: React.ComponentType<{ fill: ColorTypes }>
	sharedElementId?: string
}

const MediaFooter = ({
	image,
	title,
	subTitle,
	PlayPauseIcon,
	SkipIcon,
	sharedElementId,
	isLiftMode,
}: Props): JSX.Element => {
	const onSkip = () => null
	const iconFill = isLiftMode ? 'noModeLight' : 'primaryText'
	const titleColor = isLiftMode ? 'noModeLight' : 'primaryText'
	const subTitleColor = isLiftMode ? 'noModeLight' : 'grey'
	const bg = isLiftMode ? 'lightTransparent80' : 'background'
	const bgDark = isLiftMode ? 'secundaryTransparent100' : 'secundaryTransparent100'

	return (
		<Bg {...{ bg, bgDark }} style={styles.container}>
			<Row ai="center">
				<MediaImage
					uri={image}
					variant={MediaImageVariant.Small}
					sharedElementId={sharedElementId}
				/>
				<V ml={3} flex={1}>
					<Caption fw="Bold" color={titleColor} accessibilityRole="header">
						{title}
					</Caption>
					<Caption color={subTitleColor} numberOfLines={1}>
						{subTitle}
					</Caption>
				</V>
				<Row ai="center">
					<V mr={2}>
						<PlayPauseIcon fill={iconFill} />
					</V>

					<ScalingTapView onPress={onSkip}>
						<V>
							<SkipIcon fill={iconFill} />
						</V>
					</ScalingTapView>
				</Row>
			</Row>
		</Bg>
	)
}

const styles = StyleSheet.create({
	container: {
		...shadows.medium,
		paddingVertical: 14,
		paddingHorizontal: 22,
		borderRadius: borderRadiusScale[3],
	},
})

export default MediaFooter
