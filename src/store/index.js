import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { getSessions } from "../utils/login";

export const store = new Vuex.Store({
	state: {
		drawerOpen: false,
		connexions: {
			google: false,
			facebook: false,
			linkedin: false
		},
		hoveredElements: [],
	},
	actions: {
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
		SET_HOVERED_ELEMENT_NAME(state, payload) {
			state.hoveredElement.name = payload;
		},
		STACK_HOVERED_ELEMENT_NAME(state, payload) {
			state.hoveredElements.push(payload);
		},
		POP_HOVERED_ELEMENT_NAME(state) {
			state.hoveredElements.pop();
		}
	},
	getters: {
		connected: state => {
			return state.connexions.google || state.connexions.facebook;
		}
	}
});
