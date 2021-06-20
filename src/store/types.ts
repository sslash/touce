import { State } from 'zustand'

export interface AppStore extends State {
	onAppLoop?: (sessionDurationInSeconds: number) => void
}
