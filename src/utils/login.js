import config from "../config/config.json";

let getConsentUrl = function (service, state) {
	let conf = config[service]
	let url = conf.url;
	let queries = conf.params;
	queries.redirect_uri = process.env["VUE_APP_" + service.toUpperCase() + "_REDIRECT_URL"]
	queries.scope = queries.scope.join(conf.scope_separator);
	let i = 0;
	for (let q in queries) {
		url += i ? "&" : "";
		url += encodeURIComponent(q) + "=" + encodeURIComponent(queries[q]);
		i++;
	}
	url += "&state=" + encodeURIComponent(state.join(","));
	return url;
};

let login = function (nextElements) {
	if (nextElements.length) {
		let el = nextElements.pop().toLowerCase();

		if (!config[el]) {
			login(nextElements);
		} else {
			window.location.replace(getConsentUrl(el, nextElements));
		}
	}
};

let getSessions = async function (vm) {
	let res = await vm.$http.get("/login/loggedTo");
	let sessions = res.data;
	return sessions;
};

let logOut = async function (services, vm) {
	let sessions = await vm.$http.post("/login/logout",
		{
			services: services
		}
	);
	return sessions;
};

export { login, getSessions, logOut };
