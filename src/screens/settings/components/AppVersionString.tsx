import React from 'react'
import Caption from '../../../atoms/texts/Caption'
import config from '../../../utils/config/config'

const AppVersionString = (): React.ReactElement => {
	const version = __DEV__ ? 'DEV' : config.version

	return (
		<Caption ta="center" pb={4} color="primaryDeath">
			App version: {version}
		</Caption>
	)
}

export default AppVersionString
