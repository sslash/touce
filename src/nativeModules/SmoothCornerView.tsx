import React from 'react'
import { requireNativeComponent, View, ViewProps, ViewStyle } from 'react-native'

const NativeSmoothCornerView = requireNativeComponent(
	'SmoothCornerView'
) as React.ComponentType<ViewProps>

interface Props {
	style?: ViewStyle
	needsViewWrapping?: boolean
}

const SmoothCornerView: React.FC<Props> = ({ children, needsViewWrapping, ...rest }) => {
	if (global.IS_IOS) {
		if (needsViewWrapping) {
			return (
				<View>
					<NativeSmoothCornerView {...rest}>
						<View>{children}</View>
					</NativeSmoothCornerView>
				</View>
			)
		}

		return (
			<NativeSmoothCornerView {...rest}>
				{React.Children.only(children)}
			</NativeSmoothCornerView>
		)
	} else {
		return <View {...rest}>{children}</View>
	}
}

export default SmoothCornerView
