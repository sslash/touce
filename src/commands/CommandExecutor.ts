interface ExecArgs {
	action: (params: any) => Promise<void>
	log?: string
	conditions: () => boolean
}

class CommandExecutor {
	exec = (args: ExecArgs) => {}
}

const commandExecutor = new CommandExecutor()
export default commandExecutor
