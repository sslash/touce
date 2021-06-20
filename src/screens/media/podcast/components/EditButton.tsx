import React from 'react'
import Row from '../../../../atoms/Row'
import ScalingTapView from '../../../../atoms/ScalingTapView'
import Caption from '../../../../atoms/texts/Caption'
import { Strings } from '../../../../localization/types'

interface Props {
	strings: Strings['podcastsAndMusic']
	onSetEditMode: () => void
	isEditMode: boolean
}

const EditButton = ({ strings, onSetEditMode, isEditMode }: Props): React.ReactElement => {
	return (
		<Row jc="flex-end">
			<ScalingTapView onPress={onSetEditMode} hasHaptic>
				<Caption fw="Bold" color="primary600">
					{isEditMode ? strings.hideEdit : strings.edit}
				</Caption>
			</ScalingTapView>
		</Row>
	)
}

export default EditButton
