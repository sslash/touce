import React from 'react'
import { Text } from 'react-native'
import AipomFooter from '../atoms/AipomFooter'
import Button from '../atoms/Button'
import Spacer from '../atoms/Spacer'
import Body from '../atoms/texts/Body'
import Lead2 from '../atoms/texts/Lead2'
import V from '../atoms/V'
import { screenHeight } from '../theme/metrics'

interface ContentProps {
	title: string
	subTitle: string
	emoji?: string
	buttonText?: string
	onPress?: () => void
}

type ChildrenProps = React.PropsWithChildren<{ spacerHeight?: number }>
type Props = ContentProps | ChildrenProps

function getHasContent(props: Props): props is ContentProps {
	return !!(props as ContentProps).title?.length
}

const EmptyView = (props: Props): JSX.Element => {
	const spacerHeight = (props as ChildrenProps).spacerHeight || screenHeight * 0.15
	const content = getHasContent(props) ? (
		<>
			<Text style={{ fontSize: 42 }}>{props.emoji || '🙈'}</Text>
			<Lead2 mt={5} mb={1}>
				{props.title}
			</Lead2>
			<Body ta="center" lh={22} color="grey500" mb={6}>
				{props.subTitle}
			</Body>

			{!!props.onPress && (
				<Button size="small" onPress={props.onPress}>
					{props.buttonText || 'ok'}
				</Button>
			)}
		</>
	) : (
		(props as ChildrenProps).children
	)

	return (
		<V fg={1}>
			<V jc="center" ai="center" fg={1} mhm>
				{content}
			</V>
			<Spacer y={spacerHeight} />

			<AipomFooter />
		</V>
	)
}

export default EmptyView
