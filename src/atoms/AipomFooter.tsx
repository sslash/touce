import React from 'react'
import { View } from 'react-native'
import { mainHorizontalMargin } from '../theme/metrics'
import { Sludge, SludgeVariant } from './sludges'

const AipomFooter = (): JSX.Element => {
	return (
		<View>
			<Sludge
				variant={SludgeVariant.Aipom}
				isFaded
				style={{ top: -180, left: mainHorizontalMargin, zIndex: -1 }}
			/>
		</View>
	)
}

export default AipomFooter
