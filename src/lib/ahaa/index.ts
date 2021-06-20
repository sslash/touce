import _ from 'lodash'
type EmpathyProperties = Record<string, string | number | boolean>

class Ahaa {
	key: string
	empathyProperties: EmpathyProperties

	constructor(key: string) {
		this.key = key
	}

	setEmpathyProp = (props: EmpathyProperties): void => {
		this.empathyProperties = _.merge({}, this.empathyProperties, props)
	}

	intruiged = () => {
		// TODO handle event
	}

	firstInterest = () => {
		// TODO handle event
	}

	secondInterest = () => {
		// TODO handle event
	}

	converted = () => {
		// TODO handle event
	}

	primaryAction = () => {
		// TODO handle event
	}
}

export default Ahaa
