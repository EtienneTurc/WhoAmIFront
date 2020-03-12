let getMailsBasic = async function (context, vm) {
	let res = await vm.$http.get("google/basic/gmail");
	context.commit("SET_GOOGLE_MAIL_DATA", res.data);
};

let getMailsAnalytics = async function (context, vm) {
	context.commit("SET_GOOGLE_ANALYTICS_FETCHING_STATE", true);
	let res = await vm.$http.get("google/analytics/gmail");
	context.commit("SET_GOOGLE_ANALYTICS_FETCHING_STATE", false);
	context.commit("SET_GOOGLE_ANALYTICS_DATA", res.data);
};

let getPeople = async function (context, vm) {
	context.commit("SET_GOOGLE_FETCHING_STATE", true);
	let res = await vm.$http.get("google/basic/people");
	context.commit("SET_GOOGLE_FETCHING_STATE", false);
	context.commit("SET_GOOGLE_PEOPLE_DATA", res.data);
};

export let googleHelpers = {
	basic: {
		getPeople,
		getMailsBasic
	},
	analytics: {
		getMailsAnalytics
	}
};

export default googleHelpers;
