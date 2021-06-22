import _ from 'lodash'
import React, { useRef } from 'react'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack'
import Button from '../../atoms/Button'
import FadedOverlayFooter from '../../atoms/FadedOverlayFooter'
import { SludgeVariant } from '../../atoms/sludges'
import Spacer from '../../atoms/Spacer'
import { useStrings } from '../../localization/localizedStrings'
import ButtonCard from '../../molecules/ButtonCard'
import Screen from '../../molecules/screen/Screen'
import SignupCard from '../../molecules/SignupCard'
import StatsRow from '../../molecules/statsRow/StatsRow'
import { AllScreenParams } from '../../navigation/types'
import { spaceScale } from '../../theme/spacing'
import { responsive } from '../../theme/utils'
import config from '../../utils/config/config'
import AskForRatingModal from './AskForRatingModal'
import FeelsBox from './FeelsBox'
import MediaDurationCard from './MediaDurationCard'
interface Props {
	navigation: NativeStackNavigationProp<AllScreenParams, 'WorkoutFinished'>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WorkoutFinishedScreen = (props: Props): JSX.Element => {
	const strings = useStrings().strings.workoutFinished
	const showSignupBox = useRef(!!_.random(0, 1)).current

	const onShare = () => null

	const onFeedback = () => {
		props.navigation.navigate('WebView', {
			uri: config.feedbackUri,
		})
	}

	const onFinish = () => props.navigation.navigate('Home')

	return (
		<>
			<Screen
				testID="VibeScreen"
				sludge={SludgeVariant.Minccino}
				preset="scroll"
				headerTitle={strings.title}
				headerSubTitle={strings.subTitle}
				stdMargin
				sludgeStyle={sludgeStyle}
			>
				<Spacer y={verticalMargin * 2} />

				<StatsRow statsItems={statsItems} />
				<Spacer y={verticalMargin} />

				<FeelsBox />
				<Spacer y={verticalMargin} />

				<MediaDurationCard />

				<Spacer y={verticalMargin} />

				{showSignupBox ? (
					<SignupCard />
				) : (
					<>
						<ButtonCard
							title={strings.shareCaption}
							ctaText={strings.shareButton}
							onPress={onShare}
						/>

						<Spacer y={verticalMargin} />
						<ButtonCard
							title={strings.feedbackCaption}
							ctaText={strings.feedbackButton}
							onPress={onFeedback}
						/>
					</>
				)}

				<Spacer y={verticalMargin * 4} />
				<AskForRatingModal />
			</Screen>
			<FadedOverlayFooter>
				<Button onPress={onFinish}>{strings.finish}</Button>
			</FadedOverlayFooter>
		</>
	)
}

const sludgeStyle = { top: responsive({ xl: -270 }, -285) }
const verticalMargin = spaceScale[6]

const statsItems = [
	{
		label: 'calories',
		value: '400',
	},
	{
		label: 'activityType',
		value: 'Running',
	},
	{
		label: 'distance',
		value: '4000m',
	},
]

export default WorkoutFinishedScreen
