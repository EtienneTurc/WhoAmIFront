import config from "../config/config.json"

let getConsentUrl = function (conf, state) {
	let url = conf.url
	let queries = conf.params
	queries.scope = queries.scope.join(conf.scope_separator)
	let i = 0
	for (let q in queries) {
		url += i ? "&" : ""
		url +=
			encodeURIComponent(q) + "=" + encodeURIComponent(queries[q])
		i++
	}
	url += "&state=" + encodeURIComponent(state.join(','))
	return url
}

let login = function (nextElements) {
	if (nextElements.length) {
		let el = nextElements.pop().toLowerCase()

		if (!config[el]) {
			login(nextElements)
		} else {
			window.location.replace(getConsentUrl(config[el], nextElements))
		}
	}

}

export { login };
