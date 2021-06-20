import { cleanup } from 'detox'

beforeAll(async () => {
	await device.launchApp()
})

afterAll(async () => {
	await cleanup()
})
