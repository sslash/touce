import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import CircularShiftTimerWithLabel from '../../atoms/circularTimer/CircularShiftTimerWithLabel'
import MediaImage, { MediaImageVariant } from '../../atoms/MediaImage'
import Row from '../../atoms/Row'
import ScalingTapView from '../../atoms/ScalingTapView'
import Action from '../../atoms/texts/Action'
import Caption from '../../atoms/texts/Caption'
import V from '../../atoms/V'
import { Icon } from '../../icons'
import { RootStackParamList } from '../../navigation/types'
import { DialogVariant } from '../bottomSheetDialog/constants'
import { openDialog } from '../bottomSheetDialog/dialogOpenerApi'

interface Props {
	isRest: boolean
}

const MediaBox = ({ isRest }: Props): JSX.Element => {
	const nav = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>()
	const kind = isRest ? 'Podcast' : 'Music'
	const uri = isRest
		? 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/podcast-griefcast-1613574305.jpg?crop=1xw:1xh;center,top&resize=768:*'
		: 'https://target.scene7.com/is/image/Target/GUEST_d7dba870-822b-45a7-9e19-53db3bd93933?wid=488&hei=488&fmt=pjpeg'

	const title = isRest ? 'Griefcast With Cariad Lloyd' : 'This is Billie Eilish'
	const subTitle = isRest ? 'There is nothing for me left to say here' : 'Playlist'
	const liftFraction = 60
	const modeFill = isRest ? 'primary600' : 'primaryText'

	const onPress = () => {
		nav.navigate(isRest ? 'Podcasts' : 'Music')
	}

	const onPressTimer = () => openDialog(DialogVariant.WorkoutTimer, { isLift: !isRest })

	return (
		<Row ai="center">
			<ScalingTapView style={{ flexGrow: 1 }} onPress={onPress}>
				<Row ai="center">
					<MediaImage variant={MediaImageVariant.Large} uri={uri} />
					<V ml={4} fg={1} flex={1}>
						<Caption fw="Bold" color="primaryDeath" mb={0} numberOfLines={1}>
							{title}
						</Caption>
						<Caption color="primaryText" mb={2} numberOfLines={2}>
							{subTitle}
						</Caption>
						<Row ai="center">
							<Action fw="Bold" color={modeFill}>
								{kind}
							</Action>
							<Icon icon="chevron-forward-outline" fill={modeFill} width={12} />
						</Row>
					</V>
				</Row>
			</ScalingTapView>

			<ScalingTapView onPress={onPressTimer}>
				<CircularShiftTimerWithLabel
					label="2m"
					percentage={isRest ? 1 - liftFraction : liftFraction}
					selectedColor={isRest ? 'restColor' : 'liftColor'}
					bgColor={isRest ? 'liftColor' : 'restColor'}
					size={32}
					strokeWidth={10}
				/>
			</ScalingTapView>
		</Row>
	)
}

export default MediaBox
