import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function Lapras({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg
			width={498}
			height={383}
			viewBox="0 0 498 383"
			fill="none"
			{...props}
			style={{ top: -158, left: -62 }}
		>
			<Path
				d="M96.296 41.9c89.868-145.926 147.59 146.801 309.676 14.349 162.085-132.452 54.316 131.312 80 242C536.265 515 405.972 227.5 64.749 369c-97.018 40.232-83.806-208.314 31.547-327.1z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.14}
			/>
			<Path
				d="M96.654 42.248l.039-.04.029-.046c11.212-18.206 21.891-29.518 32.289-35.68 10.378-6.15 20.505-7.188 30.677-4.79 10.194 2.404 20.452 8.264 31.053 15.949 8.549 6.197 17.29 13.558 26.381 21.212a2297.72 2297.72 0 006.61 5.552c22.956 19.187 48.26 38.881 78.003 45.448 29.79 6.577 63.941-.03 104.553-33.217 20.247-16.545 36.247-26.875 48.796-32.095 12.557-5.223 21.555-5.29 27.899-1.494 6.358 3.803 10.224 11.584 12.267 22.473 2.04 10.873 2.24 24.73 1.373 40.524-1.101 20.053-3.917 43.151-6.84 67.132-1.684 13.807-3.402 27.906-4.85 41.886-3.959 38.22-5.89 75.537.552 103.3 6.286 27.093 9.741 46.269 10.323 59.377.291 6.554-.139 11.555-1.271 15.255-1.128 3.689-2.943 6.058-5.419 7.415-2.492 1.365-5.728 1.747-9.773 1.298-4.043-.448-8.842-1.72-14.418-3.603-7.197-2.431-15.63-5.859-25.341-9.807-5.351-2.175-11.091-4.508-17.224-6.919-69.009-27.12-187.03-63.657-357.804 7.16-12.045 4.995-22.317 5.484-30.868 2.36-8.553-3.124-15.462-9.893-20.724-19.569-10.533-19.373-14.38-50.265-11.584-86.208C6.97 193.252 39.078 101.538 96.654 42.248z"
				stroke="url(#prefix__paint1_linear)"
				strokeOpacity={0.11}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={65.109}
					y1={72.614}
					x2={409.181}
					y2={400.701}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} stopOpacity={0.55} />
					<Stop offset={1} stopColor={colors.primary500} stopOpacity={0.51} />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={64.192}
					y1={64.171}
					x2={391.266}
					y2={423.067}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} />
					<Stop offset={1} stopColor={colors.primary500} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

export default Lapras
