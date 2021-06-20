import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { Sludge } from './constants'
import colors from '../../theme/lightColors'

function Lickitung({ isDark, ...props }: Sludge): JSX.Element {
	return (
		<Svg width={568} height={602} viewBox="0 0 568 602" fill="none" {...props}>
			<Path
				d="M473.349 539c-120.214 83.637-254.785 83.637-375 0C-74.439 418.786 34.644 0 34.644 0h493.501s117.992 418.786-54.796 539z"
				fill="#10061E"
			/>
		</Svg>
	)
}

export default Lickitung
