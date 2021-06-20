import * as React from 'react'
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg'
import colors from '../../theme/lightColors'
import { Sludge } from './constants'

function Wailmer({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg
			width={506}
			height={263}
			viewBox="0 0 506 263"
			fill="none"
			{...props}
			style={{ left: -57, top: -110 }}
		>
			<Path
				d="M78 6.5c82.053.001 154.702-6 264-6s163.703-15 163.703 124.026c0 254.475-257.203 34.521-446.083 131.73C-23.642 299.108-20.4 126.064 78 6.501z"
				fill="url(#prefix__paint0_linear)"
				fillOpacity={0.14}
			/>
			<Path
				d="M1.186 192.31C3.88 139.626 29.199 66.67 78.236 7c38.014-.004 74.019-1.295 112.584-2.678L199.801 4c42.08-1.5 87.56-3 142.199-3 10.192 0 19.898-.13 29.124-.254C386.66.538 400.833.348 413.67.828c20.453.766 37.412 3.233 50.945 9.997 26.979 13.487 40.588 44.202 40.588 113.701 0 63.555-16.059 97.297-42.902 113.844-26.897 16.581-64.782 16.015-108.747 10.499-15.124-1.897-30.965-4.379-47.306-6.94-31.088-4.873-63.99-10.029-97.214-11.979-50.719-2.977-102.311 1.502-149.642 25.862-10.353 5.328-19.308 7.273-26.867 6.423-7.546-.848-13.75-4.486-18.61-10.428C4.17 239.89-.162 218.699 1.187 192.31z"
				stroke="url(#prefix__paint1_linear)"
				strokeOpacity={0.11}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={71.422}
					y1={-48.395}
					x2={457.574}
					y2={276.836}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} stopOpacity={0.55} />
					<Stop offset={1} stopColor={colors.primary500} stopOpacity={0.51} />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={70.5}
					y1={-58}
					x2={444}
					y2={304}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor={colors.secundary500} />
					<Stop offset={1} stopColor={colors.primary500} />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

export default Wailmer
