import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function Carpet({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg
			width={506}
			height={173}
			viewBox="0 0 506 173"
			fill="none"
			{...props}
			style={{ top: -54, left: -38 }}
		>
			<Path
				d="M0 3.223L506 0l-43.14 173s-14.182-21.089-138.5-21.089c-124.319 0-317 7.506-317 7.506L0 3.223z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.14}
			/>
			<Path
				d="M462.602 171.967a11.245 11.245 0 00-.257-.242c-.658-.601-1.724-1.444-3.385-2.448-3.321-2.007-9.023-4.658-18.598-7.303-19.146-5.289-53.82-10.563-116.002-10.563-62.168 0-141.424 1.877-205.135 3.753a14192.25 14192.25 0 00-79.834 2.581 11854.168 11854.168 0 00-29.856 1.088l-1.638.063-.061.003L.524 3.719 505.359.505l-42.757 171.463z"
				stroke="url(#prefix__paint1_linear)"
				strokeOpacity={0.11}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={23.86}
					y1={86.5}
					x2={189.191}
					y2={306.505}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} stopOpacity={0.55} />
					<Stop offset={1} stopColor={colors.primary500} stopOpacity={0.51} />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={65.274}
					y1={29.032}
					x2={168.775}
					y2={284.294}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} />
					<Stop offset={1} stopColor={colors.primary500} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

export default Carpet
