import React from 'react'
import { SludgeVariant } from '../../atoms/sludges'
import Spacer from '../../atoms/Spacer'
import V from '../../atoms/V'
import Screen from '../../molecules/screen/Screen'
import { responsive } from '../../theme/utils'
import HomeHeader from './HomeHeader'
import MediaBox from './MediaBox'
import StartButton from './StartButton'
import TimerCardsList from './TimerCardsList'

const HomeScreen = (): JSX.Element => {
	console.log('rerender home')
	return (
		<Screen
			preset="fixed"
			sludge={SludgeVariant.Minccino}
			stdMargin
			sludgeStyle={{ top }}
			testID="homeScreen"
		>
			<Spacer y={3} />
			<HomeHeader />

			<Spacer y={20} />
			<TimerCardsList />
			<Spacer y={60} />
			<V fg={1} jc="center">
				<MediaBox isRest />
				<Spacer y={60} />
				<MediaBox isRest={false} />
			</V>

			<StartButton />
		</Screen>
	)
}

const top = responsive({ s: -50, m: -100, l: -75, xl: -70 }, -40)

export default HomeScreen
