import React from 'react'
import { useEffect, useState } from 'react'
import { InteractionManager } from 'react-native'

function withRenderAfterInteraction<T>(
	Comp: React.ComponentType<T>
): (props: T) => React.ReactElement {
	function CompAfterInteraction(props: T): React.ReactElement {
		const [shouldRender, setShouldRender] = useState(false)

		useEffect(() => {
			const interactionPromise = InteractionManager.runAfterInteractions(() => {
				setShouldRender(true)
			})
			return () => interactionPromise.cancel()

			// setTimeout(() => {
			// 	setShouldRender(true)
			// }, 201)
		}, [])

		if (!shouldRender) {
			return null
		}

		return <Comp {...props} />
	}

	return CompAfterInteraction
}

export default withRenderAfterInteraction
