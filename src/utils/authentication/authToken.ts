import { AUTH_TOKEN as AUTH_TOKEN } from '../storage/keys'
import { loadString, saveString } from '../storage/storage'

class AuthToken {
	private _token: string = ''

	get token(): string {
		return this._token
	}

	set token(t: string) {
		this._token = t
		void saveString(AUTH_TOKEN, t)
	}

	async syncToken() {
		this.token = await loadString(AUTH_TOKEN)
	}
}

const authToken = new AuthToken()
export default authToken
