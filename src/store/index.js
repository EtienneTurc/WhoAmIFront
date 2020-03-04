import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";
axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.response.status === 401) {
      router.replace("/login");
    }
    return Promise.reject(error.response);
  }
);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export const store = new Vuex.Store({
  state: {
    connected: false, // is there any active connexion ?
    drawerOpen: false,
    accounts: {
      google: {
        attemptingConnection: false,
        fetching: false,
        error: false,
        data: null
      }
    }
  },
  actions: {
    GET_GOOGLE_DATA(context) {
      context.commit("SET_GOOGLE_FETCHING_STATE", true);
      axios
        .get("/google/")
        .then(res => {
          context.commit("SET_GOOGLE_DATA", res.data);
        })
        .catch(err => {
          context.commit("SET_GOOGLE_ERROR", payload);
        });
      context.commit("SET_GOOGLE_FETCHING_STATE", false);
    },
    REMOVE_DATA(context) {
      context.commit("SET_GOOGLE_DATA", null);
    }
  },
  mutations: {
    SET_GOOGLE_DATA(state, payload) {
      state.accounts.google.data = payload;
      state.connected = true;
    },
    SET_GOOGLE_ERROR(state, payload) {
      state.accounts.google.error = payload;
    },
    SET_GOOGLE_FETCHING_STATE(state, payload) {
      state.accounts.google.fetching = payload;
    }
  }
});
