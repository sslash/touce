import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import Row from '../../atoms/Row'
import ScalingTapView from '../../atoms/ScalingTapView'
import Thumbnail from '../../atoms/Thumbnail'
import { Icon } from '../../icons'
import { RootStackParamList } from '../../navigation/types'

const fakeThumb =
	'https://images.unsplash.com/photo-1617071504529-8a87244dae45?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'

const HomeHeader = (): JSX.Element => {
	const nav = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>()
	return (
		<Row jc="space-between" ai="center">
			<Icon icon="stats-chart" />
			<ScalingTapView onPress={() => nav.navigate('Settings')}>
				<Thumbnail
					source={{
						uri: fakeThumb,
					}}
				/>
			</ScalingTapView>
		</Row>
	)
}

export default HomeHeader
