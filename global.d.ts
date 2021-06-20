import { ReactTestInstance } from 'react-test-renderer'
import { ReactTestInstance } from 'react-test-renderer'

declare global {
	namespace jest {
		interface Matchers<R, T> {
			toBeDisabled(): R
			toContainElement(element: ReactTestInstance | null): R
			toBeEmpty(): R
			toHaveProp(attr: string, value?: any): R
			toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R
			toBeEnabled(): R
			toHaveStyle(style: unkown[] | unkown): R
		}
	}

	namespace NodeJS {
		interface Global {
			IS_IOS: boolean
			IS_ANDROID: boolean
			ifIos: <T>(a: T, b: T) => T
		}
	}
}
declare type ShiftMode = 'lift' | 'rest'
