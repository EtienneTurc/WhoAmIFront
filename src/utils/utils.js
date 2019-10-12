// URL and endpoint constants
const LOGIN_URL = process.env.VUE_APP_API_URL + '/google/login'

export default {
	login() {
		window.location.replace(LOGIN_URL)
	},
	getCode() {
		// The object to be passed as a header for authenticated requests
		return { 'code': localStorage.getItem('code') }
	},
}
