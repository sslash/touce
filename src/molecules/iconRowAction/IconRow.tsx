import React from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import Row from '../../atoms/Row'
import Body from '../../atoms/texts/Body'
import V from '../../atoms/V'
import { Icon, IconKeys } from '../../icons'

interface Props {
	icon: IconKeys
	label: string
	isExpanded?: Animated.SharedValue<boolean>
}

const IconRow = ({ isExpanded, icon, label }: Props): React.ReactElement => {
	return (
		<Row style={{ opacity: 0.8 }} ai="center">
			<Icon icon={icon} fill="primaryDeath" width={18} height={18} />
			<V flex={1} ml={3}>
				<Body color="primaryDeath" fw="DemiBold">
					{label}
				</Body>
			</V>
			{!!isExpanded ? <RotatingIcon {...{ isExpanded }} /> : <ArrowComp />}
		</Row>
	)
}

const RotatingIcon = ({ isExpanded }: Pick<Props, 'isExpanded'>) => {
	const style = useAnimatedStyle(() => ({
		transform: [{ rotate: withTiming(isExpanded.value ? '90deg' : '0deg') }],
	}))
	return (
		<Animated.View style={style}>
			<ArrowComp />
		</Animated.View>
	)
}

const ArrowComp = () => <Icon icon="chevron-forward-outline" fill="primaryDeath" />

export default IconRow
