import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    connected: false, // is there any active connexion ?
    googleConnected: false,
    googleData: null,
    awaitingGoogleConnection: false,
    fetchingState: false,
    drawerOpen: false
  },
  mutations: {
    setGoogleData(state, googleData) {
      state.googleData = googleData;
      state.connected = true;
    },
    disconnectGoogle(state) {
      state.googleData = null;
      state.googleConnected = false;
      state.connected = false; // change if adding new services
    },
    connectGoogle(state) {
      state.connected = true;
      state.googleConnected = true;
    },
    setGoogleConnectionState(state, awaiting) {
      state.awaitingGoogleConnection = awaiting;
    },
    setFetchingState(state, fetchingState) {
      state.fetchingState = fetchingState;
    },
    setDrawerState(state) {
      state.drawerOpen = !state.drawerOpen;
    }
  }
});
