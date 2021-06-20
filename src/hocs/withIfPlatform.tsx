import React from 'react'
import { Platform, PlatformOSType } from 'react-native'

function withIfPlatform<T>(
	Comp: React.ComponentType<T>,
	platform: PlatformOSType,
	AlternativeComp?: React.ComponentType<T>
): (props: T) => React.ReactElement {
	function PlatformSpecificComponent(props: T): React.ReactElement {
		if (Platform.OS === platform) {
			return <Comp {...props} />
		} else {
			return AlternativeComp ? <AlternativeComp {...props} /> : null
		}
	}

	return PlatformSpecificComponent
}

export default withIfPlatform
