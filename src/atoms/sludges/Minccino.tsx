import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function Minccino({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg
			width={528}
			height={391}
			viewBox="0 0 528 391"
			fill="none"
			{...props}
			style={{ left: -54, top: -40 }}
		>
			<Path
				d="M86.167.005h190.052c189 0 126.895-4.356 224.703 241.964 121.297 305.475-197.203 25.975-446.082 131.73C-31.344 410.321-12.234 119.568 86.167.005z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.14 * (isDark ? 3 : 1)}
			/>
			<Path
				d="M86.403.505h189.816c3.294 0 6.51-.001 9.653-.003 41.966-.017 70.674-.028 91.361 3.165 11.107 1.715 19.868 4.35 27.108 8.386 7.233 4.032 12.971 9.477 18.014 16.846 10.111 14.776 17.401 37.237 28.296 71.498l.903 2.84c10.783 33.921 25.115 79.007 48.904 138.917 15.156 38.169 23.427 67.165 25.833 88.897 2.407 21.74-1.064 36.117-9.269 45.165-8.207 9.052-21.263 12.894-38.328 13.291-17.056.396-38.013-2.652-61.902-7.269-13.315-2.573-27.538-5.634-42.492-8.852-38.668-8.32-82.231-17.694-127.655-22.425-63.006-6.563-129.672-4.207-192 22.278-10.656 4.528-19.608 3.973-26.976-.603-7.398-4.595-13.284-13.296-17.662-25.235-8.753-23.876-11.375-60.439-8.225-101.941C8.077 162.541 37.384 60.202 86.402.505z"
				stroke="url(#prefix__paint1_linear)"
				strokeOpacity={0.11 * (isDark ? 3 : 1)}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={69.026}
					y1={74.068}
					x2={420.369}
					y2={422.268}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} stopOpacity={0.55} />
					<Stop offset={1} stopColor={colors.primary500} stopOpacity={0.51} />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={68.053}
					y1={65.455}
					x2={400.24}
					y2={444.304}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} />
					<Stop offset={1} stopColor={colors.primary500} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

export default Minccino
