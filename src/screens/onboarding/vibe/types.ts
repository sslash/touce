import { activityEmojis } from '../../../data/activities/activities'

export interface Activity {
	title: string
	subTitle: string
}
export type ActivityKeys = keyof typeof activityEmojis
