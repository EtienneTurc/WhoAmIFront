import Vue from "vue";
import Vuex from "vuex";
import lodash from "lodash";
let config = require("../config/config.json");

Vue.use(Vuex);

import { googleHelpers, facebookHelpers, fetchers } from "./api";
import { cleaners } from "./helpers";
import { getSessions } from "../utils/login";

export const store = new Vuex.Store({
  state: {
    drawerOpen: false,
    connexions: {
      google: false,
      facebook: false,
      linkedin: false
    },
    basic: {
      google: {
        attemptingConnection: false,
        fetching: false,
        error: false,
        peopleData: null,
        mailData: null
      },
      facebook: {
        peopleData: null,
        fetching: false
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
    async SYNC_DATA(context) {
      Object.keys(context.state.connexions).forEach(service => {
        console.log(
          service,
          context.state.connexions[service],
          context.getters[`${service}Data`]
        );

        if (
          context.state.connexions[service] &&
          !context.getters[`${service}Data`]
        ) {
          console.log("fetching data for service ", service);

          // get data if service is connected and no data
          fetchers.basic[service].forEach(apiCaller => {
            apiCaller(context, this._vm);
          });
          fetchers.analytics[service].forEach(apiCaller => {
            // console.log(apiCaller);
            apiCaller(context, this._vm);
          });
          // console.log(service);
        } else if (
          !context.state.connexions[service] &&
          Object(context.getters)[`${service}Data`]
        ) {
          // remove data when service is connected and there is data
          console.log("removing data for service ", service);
          cleaners[service](context);
        }
      });
      return;
    },
    async GET_CONNEXIONS_STATUS(context) {
      // updates front end connexions based on backend

      let backendSessions = await getSessions(this._vm);
      let frontendSessions = context.state.connexions;

      Object.keys(frontendSessions).forEach(session => {
        context.commit("SET_STATUS_CONNEXION", {
          service: session,
          connexion: backendSessions.includes(session) // true or false
        });
      });
      return;
    }
  },
  mutations: {
    SET_STATUS_CONNEXION(state, params) {
      Vue.set(state.connexions, params.service, params.connexion);
    },
    SET_DRAWER_STATE(state, isOpen) {
      state.drawerOpen = isOpen;
    },
    SET_GOOGLE_PEOPLE_DATA(state, payload) {
      Vue.set(state.basic.google, "peopleData", payload);
    },
    SET_FACEBOOK_PEOPLE_DATA(state, payload) {
      Vue.set(state.basic.facebook, "peopleData", payload);
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
    SET_FACEBOOK_FETCHING_STATE(state, payload) {
      state.basic.facebook.fetching = payload;
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
    googleData: state => {
      let hasBasicData =
        !_.isEmpty(state.basic.google.peopleData) ||
        !_.isEmpty(state.basic.google.mailData);
      let hasAnalyticsData = !_.isEmpty(state.analytics.google.data);
      return (
        hasAnalyticsData ||
        hasBasicData ||
        state.basic.google.fetching ||
        state.analytics.google.fetching
      );
    },
    facebookData: state => {
      console.log(state.basic.facebook.peopleData);

      let hasBasicData = !_.isEmpty(state.basic.facebook.peopleData);
      return hasBasicData || state.basic.facebook.fetching;
    }
  }
});
