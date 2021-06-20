import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function Aipom({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg width={377} height={415} viewBox="0 0 377 415" fill="none" {...props}>
			<Path
				d="M124.5 80.728c216.57-214.163 121 74.003 210 0s10 250.999 10 250.999-344.5 178-344.5 12c0-65.5 34.5-174 124.5-263z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.14 * (isDark ? 4 : 1)}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={202.013}
					y1={0}
					x2={202.013}
					y2={431.602}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.primary500} stopOpacity={0.65} />
					<Stop offset={1} stopColor={colors.primary500} stopOpacity={0.23} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

export default Aipom
