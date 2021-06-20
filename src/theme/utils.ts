import { screenHeight } from './metrics'

const iPhoneSeBreakpoint = 568
const iPhone78Breakpoint = 667
const iPhoneXBreakpoint = 812
const mediumScreenBreakpoint = global.ifIos(iPhone78Breakpoint, 697)
const largeScreenBreakpoint = global.ifIos(iPhoneXBreakpoint, 732)

const isSmall = global.ifIos(
	screenHeight <= iPhoneSeBreakpoint,
	screenHeight < mediumScreenBreakpoint
)

const isMedium = global.ifIos(
	screenHeight <= mediumScreenBreakpoint,
	screenHeight < mediumScreenBreakpoint
)

const isLarge = screenHeight <= largeScreenBreakpoint

interface ResponsiveProps<T> {
	s?: T
	m?: T
	l?: T
	xl?: T
}

export function responsive<T>({ s, m, l, xl }: ResponsiveProps<T>, defaultValue?: T): T {
	switch (true) {
		case isSmall:
			return s || defaultValue
		case isMedium:
			return m || defaultValue
		case isLarge:
			return l || defaultValue
		// XL
		default:
			return xl || defaultValue
	}
}
