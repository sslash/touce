import React, { useState } from 'react'
import { LayoutAnimation, Pressable } from 'react-native'
import Caption from '../atoms/texts/Caption'
import Caption2 from '../atoms/texts/Caption2'
import { useStrings } from '../localization/localizedStrings'

interface Props {
	heading?: string
	shrinkedLines?: number
}

const ExpandingText: React.FC<Props> = ({ children, heading, shrinkedLines = 4 }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const strings = useStrings().strings.general

	const onPress = () => {
		// TODO: improve animation
		LayoutAnimation.easeInEaseOut()
		setIsExpanded((v) => !v)
	}
	return (
		<Pressable {...{ onPress }}>
			{!!heading && (
				<Caption2 color="primaryText" mb={1}>
					{heading}
				</Caption2>
			)}
			<Caption numberOfLines={isExpanded ? undefined : shrinkedLines} mb={2}>
				{children}
			</Caption>
			<Caption color="primaryText" fw="DemiBold">
				{strings.showMore}
			</Caption>
		</Pressable>
	)
}

export default ExpandingText
