import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function SpiderLines({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg width={308} height={436} viewBox="0 0 308 436" fill="none" {...props}>
			<Path
				d="M71.943 60.883s152.5 36 200 107.001c47.5 71-29 204.5-29 204.5"
				stroke={colors.primary500}
				strokeOpacity={0.06}
			/>
			<Path
				d="M197.443 435.384s-166.662 1.5-191.5-49.5c-24.837-51 52-297 52-297"
				stroke={colors.secundary500}
				strokeOpacity={0.06}
			/>
		</Svg>
	)
}

export default SpiderLines
