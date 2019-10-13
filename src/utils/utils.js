// URL and endpoint constants
const LOGIN_URL = process.env.VUE_APP_API_URL + '/google/login'

export default {
	login() {
		window.location.replace(LOGIN_URL)
	},
	getHeaders(code) {
		// The object to be passed as a header for authenticated requests
		let headers = {}
		let token = localStorage.getItem('token')
		if (token) {
			headers.token = token
		}
		if (code) {
			headers.code = code
		}
		return headers
	},
}
