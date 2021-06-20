import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function Ditto({ isDark, ...props }: Sludge) {
	return (
		<Svg
			width={530}
			height={436}
			viewBox="0 0 530 436"
			fill="none"
			style={{ top: -150, left: -72 }}
			{...props}
		>
			<Path
				d="M123.547 41.9c89.868-145.926 147.59 146.801 309.675 14.349 162.086-132.452 54.317 131.312 80 242 67 288.751-77.334-150.254-470.5 130.251-85.5 61-34.528-267.814 80.825-386.6z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.14}
			/>
			<Path
				d="M123.905 42.248l.038-.04.029-.046c11.213-18.206 21.892-29.518 32.29-35.68 10.378-6.15 20.505-7.188 30.677-4.79 10.194 2.404 20.452 8.264 31.053 15.949 8.549 6.197 17.29 13.558 26.381 21.213a2442 2442 0 006.609 5.551c22.957 19.187 48.261 38.881 78.004 45.448 29.789 6.577 63.94-.03 104.553-33.217 20.247-16.545 36.247-26.875 48.796-32.095 12.557-5.223 21.554-5.29 27.899-1.494 6.358 3.803 10.224 11.584 12.266 22.473 2.04 10.873 2.241 24.73 1.374 40.524-1.101 20.053-3.917 43.15-6.841 67.132-1.683 13.806-3.402 27.906-4.85 41.886-3.958 38.22-5.89 75.537.552 103.3 8.376 36.098 13.442 60.791 15.136 76.934.847 8.076.845 13.967.013 18.06-.831 4.087-2.463 6.275-4.798 7.147-2.386.892-5.664.477-9.94-1.063-4.256-1.533-9.394-4.14-15.44-7.485-3.642-2.015-7.61-4.296-11.903-6.764-9.937-5.713-21.62-12.43-35.044-19.171-38.473-19.32-91.367-38.909-159.253-36.104-67.887 2.806-150.719 28.005-249.074 98.177-10.632 7.585-18.974 8.992-25.287 5.737-6.356-3.279-10.884-11.388-13.598-23.408-5.42-24.001-3.475-63.014 4.76-107.712 8.23-44.679 22.734-94.976 42.383-141.519 19.652-46.548 44.437-89.309 73.215-118.943z"
				stroke="url(#prefix__paint1_linear)"
				strokeOpacity={0.11}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={69.218}
					y1={82.791}
					x2={459.256}
					y2={429.575}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} stopOpacity={0.55} />
					<Stop offset={1} stopColor={colors.primary500} stopOpacity={0.51} />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={68.242}
					y1={73.164}
					x2={442.665}
					y2={456.252}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} />
					<Stop offset={1} stopColor={colors.primary500} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

const DittoSludgeMemoed = React.memo(Ditto)
export default DittoSludgeMemoed
