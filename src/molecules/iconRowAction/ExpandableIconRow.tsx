import React from 'react'
import Accordion from '../../animations/Accordion'
import ScalingTapView from '../../atoms/ScalingTapView'
import { IconKeys } from '../../icons'
import { spaceScale } from '../../theme/spacing'
import IconRow from './IconRow'

interface Props {
	icon: IconKeys
	label: string
	onPress?: () => void
	isLast?: boolean
}

const ExpandableIconRow: React.FC<Props> = ({ label, icon, isLast, children, onPress }) => {
	const containerStyle = {
		marginBottom: isLast ? undefined : spaceScale[4],
	}

	if (onPress) {
		return (
			<ScalingTapView {...{ onPress }} style={containerStyle}>
				<IconRow {...{ icon, label }} />
			</ScalingTapView>
		)
	}

	return (
		<Accordion
			containerStyle={containerStyle}
			ExpandableContent={children}
			StickyContent={(props) => <IconRow {...{ icon, label }} {...props} />}
		></Accordion>
	)
}

export default ExpandableIconRow
