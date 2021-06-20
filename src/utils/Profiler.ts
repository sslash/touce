class Profiler {
	startTime: number

	constructor(startTime: number) {
		this.startTime = startTime
	}

	static start(): Profiler {
		// eslint-disable-next-line no-console
		console.log('🏎 Profiler started')
		return new Profiler(Date.now())
	}

	end = (): void => {
		const now = Date.now()
		// eslint-disable-next-line no-console
		console.log(`🏎 Duration: ${(now - this.startTime) / 1000}`)
	}
}

export default Profiler
