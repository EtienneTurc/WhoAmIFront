// URL and endpoint constants
const LOGIN_URL = process.env.VUE_APP_API_URL + "/google/login";

function loginGoogle(vm) {
	localStorage.removeItem("tokenGoogle");
	vm.$http
		.get(process.env.VUE_APP_API_URL + "/login/google")
		.then(res => {
			vm.$store.commit("setGoogleConnectionState", true);
			window.location.replace(res.data);
		})
		.catch(err => {
			console.log(err);
		});
}

function getDayInSeconds(date) {
	let millisecondsInDay = 1000 * 3600 * 24;
	return Math.floor(date / millisecondsInDay) * millisecondsInDay;
}

var login = {
	Google: loginGoogle
};

export { login, getDayInSeconds };
