import React from 'react'
import { Icon } from '../../../icons'
import { ColorTypes } from '../../../theme/types'

const MediaPlayPauseIcon = ({ fill }: { fill: ColorTypes }): JSX.Element => {
	return <Icon icon="pause-outline" {...{ fill }} />
}

export default MediaPlayPauseIcon
