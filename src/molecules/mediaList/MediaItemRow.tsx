import React from 'react'
import { StyleSheet } from 'react-native'
import Bg from '../../atoms/Bg'
import MediaImage, { MediaImageVariant, mediumSize, smallSize } from '../../atoms/MediaImage'
import Row from '../../atoms/Row'
import ScalingTapView from '../../atoms/ScalingTapView'
import Caption from '../../atoms/texts/Caption'
import Caption2 from '../../atoms/texts/Caption2'
import V from '../../atoms/V'
import { Icon } from '../../icons'
import { mainHorizontalMargin } from '../../theme/metrics'
import { spaceScale } from '../../theme/spacing'
import { accentColor } from '../groupedItemsList/constants'
import { DetailItemViewModel, MediaItem, RowVariant, State } from './types'

const icons = {
	[State.UpNext]: 'checkmark-done-outline',
	[State.UpNextFull]: 'checkmark-done-outline',
	[State.Addable]: 'add-circle-outline',
	[State.Playable]: 'play-circle-outline',
	[State.Expandable]: 'chevron-forward-outline',
	[State.Deletable]: 'close-circle-outline',
	[State.NA]: null,
}

interface Props {
	variant: RowVariant
	item: MediaItem
}

const MediaItemRow: React.FC<Props> = (props) => {
	const { image, state = State.Playable, onPress, uri } = props.item

	const iconName = icons[state]
	const bg = state === State.UpNextFull ? 'primary20' : 'transparent'
	const isCompact = props.variant === RowVariant.Compact
	const ml = isCompact ? 3 : 4
	const imgVariant = isCompact ? MediaImageVariant.Small : MediaImageVariant.Medium

	const _onPress = () => onPress(uri)

	return (
		<ScalingTapView onPress={_onPress} hasHaptic>
			<Bg bg={bg} style={[styles.bg, isCompact && styles.compact]}>
				<Row ai="center">
					<MediaImage variant={imgVariant} uri={image} />
					<V ml={ml} flex={1}>
						<RowBody {...props} />
					</V>
					<V pl={4}>{!!iconName && <Icon icon={iconName} fill={accentColor} />}</V>
				</Row>
			</Bg>
		</ScalingTapView>
	)
}

const RowBody = ({ variant, item }: Props): JSX.Element => {
	const { title, accessibilityLabel, subTitle } = item

	switch (variant) {
		case RowVariant.Detailed:
			const { preTitle } = item as DetailItemViewModel
			return (
				<>
					{!!preTitle && <Caption2 color="grey500">{preTitle}</Caption2>}
					<Caption
						color="primaryText"
						fw="DemiBold"
						numberOfLines={2}
						{...{ accessibilityLabel }}
					>
						{title}
					</Caption>
					{!!subTitle && <Caption2 color="grey500">{subTitle}</Caption2>}
				</>
			)
		case RowVariant.Simple:
		case RowVariant.Compact:
			return (
				<>
					<Caption
						color="primaryText"
						fw="DemiBold"
						numberOfLines={2}
						{...{ accessibilityLabel }}
					>
						{title}
					</Caption>
					<Caption2 color="grey500">{subTitle}</Caption2>
				</>
			)
	}
}

export const defaultHeight = mediumSize + spaceScale[3] * 2
const compactHeight = smallSize + spaceScale[2] * 2
export const getRowHeight = (variant: RowVariant): number => {
	return variant === RowVariant.Compact ? defaultHeight : compactHeight
}

const styles = StyleSheet.create({
	bg: {
		marginHorizontal: -mainHorizontalMargin,
		paddingHorizontal: mainHorizontalMargin,
		height: defaultHeight,
		justifyContent: 'center',
	},
	compact: {
		height: compactHeight,
	},
})

export default MediaItemRow
