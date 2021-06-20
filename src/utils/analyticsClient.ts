import _ from 'lodash'
import Ahaa from '../lib/ahaa'
import { useUserConfigs } from '../store/userConfigs'

class AnalyticsClient {
	private client: Ahaa

	constructor() {
		// TODO: get from config
		this.client = new Ahaa(_.uniqueId())
	}

	//
	// Empathy. User behavior or properties
	//
	setEmpathyProp = (key: string, value: string | number | boolean): void => {
		if (this.canTrack) {
			this.client.setEmpathyProp({ [key]: value })
		}
	}

	//
	// behavior funnel
	//

	// continue from first step
	intruiged = () => {
		if (this.canTrack) {
			this.client.intruiged()
		}
	}

	// signup, login or similar
	firstInterest = () => {
		if (this.canTrack) {
			this.client.firstInterest()
		}
	}

	// another important step, like tuning the product. adding a podcast, playlist etc
	secondInterest = () => {
		if (this.canTrack) {
			this.client.secondInterest()
		}
	}

	// purchase, sign up for trial, use offer code, etc
	converted = () => {
		if (this.canTrack) {
			this.client.converted()
		}
	}

	// core app action performed
	primaryAction = () => {
		if (this.canTrack) {
			this.client.primaryAction()
		}
	}

	canTrack = (): boolean => {
		return useUserConfigs.getState().allowTracking
	}
}

const analyticsClient = new AnalyticsClient()
export default analyticsClient
