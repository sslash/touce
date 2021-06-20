import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function Arbok({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg width={362} height={381} viewBox="0 0 362 381" fill="none" {...props}>
			<Path
				d="M96.04 12.817c81.5-58.997 81.5 108.493 190 43.997 108.5-64.497 82.5 77.504 31 172.503-61.513 113.47-144.341 200.57-268.5 119-86-56.5-50-222.499 47.5-335.5z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.14}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={180.777}
					y1={0}
					x2={180.777}
					y2={380.306}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} stopOpacity={0.65} />
					<Stop offset={1} stopColor={colors.secundary500} stopOpacity={0.3} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

export default Arbok
