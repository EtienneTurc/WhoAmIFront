import config from "../config/config.json";
import Vue from "vue";

let getConsentUrl = function(conf, state) {
  let url = conf.url;
  let queries = conf.params;
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

let login = function(nextElements) {
  if (nextElements.length) {
    let el = nextElements.pop().toLowerCase();

    if (!config[el]) {
      login(nextElements);
    } else {
      window.location.replace(getConsentUrl(config[el], nextElements));
    }
  }
};

let getSessions = async function(vm) {
  let res = await vm.$http.get(process.env.VUE_APP_API_URL + "/login/loggedTo");
  let sessions = res.data;
  return sessions;
};

let logOut = async function(services, vm) {
  let sessions = await vm.$http.post(
    process.env.VUE_APP_API_URL + "/login/logout",
    {
      services: services
    }
  );
  return sessions;
};

export { login, getSessions, logOut };
