const emailRegEx = /^\S+@\S+$/
export const isValidEmail = (text: string): boolean => {
	return !!text.match(emailRegEx)
}
