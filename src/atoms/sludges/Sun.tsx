import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function Sun({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg
			width={428}
			height={318}
			viewBox="0 0 428 318"
			fill="none"
			{...props}
			style={{ left: -26, top: -76.5 }}
		>
			<Path
				d="M0 0h428v277s-129.928 40.5-213.5 40.5S0 277 0 277V0z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.14}
			/>
			<Path
				d="M.5.5h427v276.131l-.023.007-1.102.339c-.972.296-2.407.731-4.264 1.284a1094.607 1094.607 0 01-15.854 4.586 1315.193 1315.193 0 01-53.782 13.916C309.552 306.887 256.225 317 214.5 317c-41.725 0-95.302-10.113-138.475-20.237a1339.382 1339.382 0 01-54.127-13.916 1116.903 1116.903 0 01-15.967-4.586 687.918 687.918 0 01-5.406-1.623l-.025-.007V.5z"
				stroke="url(#prefix__paint1_linear)"
				strokeOpacity={0.11}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={56.002}
					y1={60.292}
					x2={341.99}
					y2={342.782}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} stopOpacity={0.55} />
					<Stop offset={1} stopColor={colors.primary500} stopOpacity={0.51} />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={55.212}
					y1={53.282}
					x2={325.734}
					y2={360.778}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} />
					<Stop offset={1} stopColor={colors.primary500} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

export default Sun
