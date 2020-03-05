import Vue from "vue";

// URL and endpoint constants
const LOGIN_URL = process.env.VUE_APP_API_URL + "/google/login";

function loginGoogle(vm) {
  localStorage.removeItem("token");
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

export { login };
