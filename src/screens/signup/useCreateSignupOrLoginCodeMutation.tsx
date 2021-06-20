import {
	useCreateLoginCodeMutation,
	useCreateSignupCodeMutation,
} from '../../queries/autogenerate/hooks'

type ReturnType = [() => Promise<boolean>, { isLoading: boolean; errorString?: string }]

export const useCreateSignupOrLoginCodeMutation = (
	isSignup: boolean,
	email: string
): ReturnType => {
	const [signupMutation, signupState] = useCreateSignupCodeMutation()
	const [loginMutation, loginState] = useCreateLoginCodeMutation()

	const isLoading = signupState.loading || loginState.loading
	const errorString = (signupState?.error || loginState?.error)?.message

	const exec = async (): Promise<boolean> => {
		const args = { variables: { email } }
		const { errors } = await (isSignup ? signupMutation(args) : loginMutation(args))

		return errors?.length > 0 ?? false
	}

	return [exec, { isLoading, errorString }]
}
