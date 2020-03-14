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

var login = {
	Google: loginGoogle
};

function getDayInSeconds(date) {
  let millisecondsInDay = 1000 * 3600 * 24;
  return Math.floor(date / millisecondsInDay) * millisecondsInDay;
}

// TO get colors get to this site:
// https://codepen.io/sosuke/pen/Pjoqqp
var colors = {
	"red": 'invert(49%) sepia(13%) saturate(4018%) hue-rotate(312deg) brightness(74%) contrast(96%)',
	"blue-dark": "invert(18%) sepia(40%) saturate(503%) hue-rotate(168deg) brightness(99%) contrast(88%)",
	"white": "invert(99%) sepia(1%) saturate(7500%) hue-rotate(191deg) brightness(107%) contrast(102%)"
}

function getColorFilter(color) {
	return colors[color]
}

export { login, getColorFilter, getDayInSeconds };
