import { AsyncStorage } from './asyncStorage'

import { load, loadString, save, saveString, clear, remove } from './storage'

// expo
jest.mock('react-native', () => ({
	AsyncStorage: {
		getItem: jest.fn(),
		setItem: jest.fn(),
		removeItem: jest.fn(),
		multiSet: jest.fn(),
		multiRemove: jest.fn(),
		clear: jest.fn(),
	},
}))

// fixtures
const VALUE_OBJECT = { x: 1 }
const VALUE_STRING = JSON.stringify(VALUE_OBJECT)

beforeEach(() => (AsyncStorage.getItem as jest.Mock).mockReturnValue(Promise.resolve(VALUE_STRING)))
afterEach(() => jest.clearAllMocks())

test('load', async () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const value = await load('sapdap')
	expect(value).toEqual(JSON.parse(VALUE_STRING))
})

test('loadString', async () => {
	const value = await loadString('sapdap')
	expect(value).toEqual(VALUE_STRING)
})

test('save', async () => {
	await save('sapdap', VALUE_OBJECT)
	expect(AsyncStorage.setItem).toHaveBeenCalledWith('sapdap', VALUE_STRING)
})

test('saveString', async () => {
	await saveString('sapdap', VALUE_STRING)
	expect(AsyncStorage.setItem).toHaveBeenCalledWith('sapdap', VALUE_STRING)
})

test('remove', async () => {
	await remove('sapdap')
	expect(AsyncStorage.removeItem).toHaveBeenCalledWith('sapdap')
})

test('clear', async () => {
	await clear()
	expect(AsyncStorage.clear).toHaveBeenCalledWith()
})
