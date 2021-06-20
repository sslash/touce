import React, { useState } from 'react'
import uuid from 'react-native-uuid'
import Button, { ButtonVariant } from '../atoms/Button'
import Body from '../atoms/texts/Body'
import V, { VProps } from '../atoms/V'
import { useStrings } from '../localization/localizedStrings'
import Popup from '../molecules/popup/Popup'
import { GetMeDocument, useCreateOauthUserMutation } from '../queries/autogenerate/hooks'
import { GetMeQuery } from '../queries/autogenerate/operations'
import apolloManager from '../utils/apollo/apolloClient'
import authToken from '../utils/authentication/authToken'
import { updateOnAuthSuccess } from '../utils/authentication/onAuthSuccess'
import { createLogger } from '../utils/logger'

const logger = createLogger('🎧', 'spotify-auth')
interface Props {
	isSignup: boolean
	containerProps?: VProps
	onFinish: () => void
}

const SpotifyAuthButton = ({ isSignup, containerProps, onFinish }: Props): React.ReactElement => {
	const [showHasPremium, setShowHasPremium] = useState(false)
	const strings = useStrings().strings.auth
	const buttonLabel = isSignup ? strings.signup.spotifyAuth : strings.login.spotifyAuth
	const [mutation, { loading, error }] = useCreateOauthUserMutation()
	const errorString = error?.message

	const onPress = () => {
		setShowHasPremium(true)
	}

	const handleSpotifyAuth = async () => {
		logger.log('spotify auth started', undefined, true)
		setShowHasPremium(false)
		// TODO: integrate with Spotify here
		const fakeId = uuid.v4() as string
		const fakeEmail = `${uuid.v4() as string}@fake-domain.com`

		const res = await mutation({
			variables: {
				email: fakeEmail,
				spotifyId: fakeId,
			},
			update: updateOnAuthSuccess('data.createOauthUser.user'),
		})

		logger.log('spotify auth mutation error?', res.errors, true)

		onFinish()
	}

	const handleDontHandPremium = () => {
		setShowHasPremium(false)
	}

	const dismissPopup = () => setShowHasPremium(false)

	return (
		<V {...containerProps}>
			<Button
				variant={ButtonVariant.Spotify}
				logo="spotify"
				onPress={onPress}
				isLoading={loading}
			>
				{buttonLabel}
			</Button>
			{!!errorString && (
				<Body mt={3} color="error" fw="DemiBold">
					{errorString}
				</Body>
			)}
			{showHasPremium && (
				<Popup
					preHeader="Spotify"
					heading="Do you have Spotify Premium"
					body="A Spotify premium membership is required for this integration."
					onExit={dismissPopup}
					buttonGroup={{
						primary: {
							label: 'Yup!',
							onPress: handleSpotifyAuth,
						},
						secundary: {
							label: 'No',
							onPress: handleDontHandPremium,
						},
					}}
				/>
			)}
		</V>
	)
}

export default SpotifyAuthButton
