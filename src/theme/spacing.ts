import _ from 'lodash'
import { ViewStyle } from 'react-native'

const SPACE_REG = /^[mp][trblxy]?$/

const properties = {
	m: 'margin',
	p: 'padding',
}

const directions = {
	t: 'Top',
	r: 'Right',
	b: 'Bottom',
	l: 'Left',
	x: ['Left', 'Right'],
	y: ['Top', 'Bottom'],
}

const getProperties = (key: string) => {
	const [a, b] = key.split('') as [keyof typeof properties, keyof typeof directions]
	const property = properties[a] as 'margin' | 'padding'

	const direction = directions[b] || ''

	return Array.isArray(direction)
		? direction.map((dir) => property + dir)
		: [property + direction]
}

const getValue = (scale: number[]) => (n: number) => scale[n]

const applySpace = (props: SpaceProps): ViewStyle | null => {
	if (!props) {
		return null
	}

	const keys = Object.keys(props)
		.filter((key) => SPACE_REG.test(key))
		.sort()

	const getStyle = getValue(spaceScale)

	return (
		keys
			.map((key) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const value = props[key]

				if (_.isNil(value)) {
					return null
				}

				const _properties = getProperties(key)

				const style = (n: number) =>
					_properties.reduce(
						(a, prop) => ({
							...a,
							[prop]: getStyle(n),
						}),
						{}
					)

				return style(value)
			})
			// @ts-ignore
			.reduce(_.merge, {}) as ViewStyle
	)
}

export interface SpaceProps {
	m?: number
	mx?: number
	my?: number
	mb?: number
	mt?: number
	ml?: number
	mr?: number
	p?: number
	px?: number
	py?: number
	pb?: number
	pt?: number
	pl?: number
	pr?: number
}

export const spaceScale = [2, 4, 8, 12, 16, 24, 32, 48, 64, 124, 256]

export default applySpace
