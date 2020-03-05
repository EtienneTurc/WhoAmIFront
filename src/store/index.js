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

let getMailsBasic = async function(context) {
  let res = await axios.get("google/basic/gmail");
  context.commit("SET_GOOGLE_MAIL_DATA", res.data);
};

let getMailsAnalytics = async function(context) {
  context.commit("SET_GOOGLE_ANALYTICS_FETCHING_STATE", true);
  let res = await axios.get("google/analytics/gmail");
  context.commit("SET_GOOGLE_ANALYTICS_FETCHING_STATE", false);
  context.commit("SET_GOOGLE_ANALYTICS_DATA", res.data);
};

let getPeople = async function(context) {
  context.commit("SET_GOOGLE_FETCHING_STATE", true);
  let res = await axios.get("google/people");
  context.commit("SET_GOOGLE_FETCHING_STATE", false);
  context.commit("SET_GOOGLE_PEOPLE_DATA", res.data);
};

export const store = new Vuex.Store({
  state: {
    drawerOpen: false,
    accounts: {
      google: {
        attemptingConnection: false,
        fetching: false,
        error: false,
        peopleData: null,
        mailData: null
      }
    },
    analytics: {
      google: {
        fetching: false,
        error: false,
        hasData: false,
        data: {}
      }
    }
  },
  actions: {
    async GET_GOOGLE_DATA(context) {
      context.commit("SET_GOOGLE_FETCHING_STATE", true);
      let promises = [
        getMailsAnalytics(context),
        getPeople(context),
        getMailsBasic(context)
      ];
      await Promise.all(promises);
      context.commit("SET_GOOGLE_FETCHING_STATE", false);
    },
    REMOVE_DATA(context) {
      context.commit("SET_GOOGLE_PEOPLE_DATA", null);
      context.commit("SET_GOOGLE_ANALYTICS_DATA", null);
    },
    REMOVE_GOOGLE_DATA(context) {
      context.commit("SET_GOOGLE_PEOPLE_DATA", null);
      context.commit("SET_GOOGLE_ANALYTICS_DATA", null);
    }
  },
  mutations: {
    SET_DRAWER_STATE(state, isOpen) {
      state.drawerOpen = isOpen;
    },
    SET_GOOGLE_PEOPLE_DATA(state, payload) {
      Vue.set(state.accounts.google, "peopleData", payload);
    },
    SET_GOOGLE_MAIL_DATA(state, payload) {
      Vue.set(state.accounts.google, "mailData", payload);
    },
    SET_GOOGLE_ERROR(state, payload) {
      state.accounts.google.error = payload;
    },
    SET_GOOGLE_FETCHING_STATE(state, payload) {
      state.accounts.google.fetching = payload;
    },
    SET_GOOGLE_ANALYTICS_DATA(state, payload) {
      Vue.set(state.analytics.google, "data", payload);
    },
    SET_GOOGLE_ANALYTICS_ERROR(state, payload) {
      state.analytics.google.error = payload;
    },
    SET_GOOGLE_ANALYTICS_FETCHING_STATE(state, payload) {
      state.analytics.google.fetching = payload;
    }
  },
  getters: {
    googleConnected: state => {
      let res = state.accounts.google.peopleData != null;
      return res;
    }
  }
});
