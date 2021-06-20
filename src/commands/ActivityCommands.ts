import { createDefaultTimer } from '../models/timerTemplate'
import { ActivityKeys } from '../screens/onboarding/vibe/types'
import { useCurrentActivityTimer } from '../store'
import { stateUpdater } from '../store/helpers/imperativeApi'
import analyticsClient from '../utils/analyticsClient'
import { Logger } from '../utils/logger'

class ActivityCommands {
	// TODO: move to compound hook
	setActivityInOnboarding = (activityKey: ActivityKeys, logger: Logger) => {
		logger.log('setActivityInOnboarding', { activityKey })

		analyticsClient.setEmpathyProp('onboardingActivity', activityKey)

		// TODO: create list of timers here, based on the key.

		stateUpdater(useCurrentActivityTimer, (s) => s.setActivityTimer(createDefaultTimer()))
	}
}

const activityCommands = new ActivityCommands()
export default activityCommands
