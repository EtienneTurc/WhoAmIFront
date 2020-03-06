import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import googleHelpers from "./api";

export const store = new Vuex.Store({
  state: {
    drawerOpen: false,
    basic: {
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
        data: {}
      }
    }
  },
  actions: {
    async GET_GOOGLE_DATA(context) {
      context.commit("SET_GOOGLE_FETCHING_STATE", true);
      let promises = [
        googleHelpers.analytics.getMailsAnalytics(context, this._vm),
        googleHelpers.basic.getPeople(context, this._vm),
        googleHelpers.basic.getMailsBasic(context, this._vm)
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
      Vue.set(state.basic.google, "peopleData", payload);
    },
    SET_GOOGLE_MAIL_DATA(state, payload) {
      Vue.set(state.basic.google, "mailData", payload);
    },
    SET_GOOGLE_ERROR(state, payload) {
      state.basic.google.error = payload;
    },
    SET_GOOGLE_FETCHING_STATE(state, payload) {
      state.basic.google.fetching = payload;
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
      let res = state.basic.google.peopleData != null;
      return res;
    }
  }
});
