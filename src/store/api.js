import cleaners from "./helpers";

let getGoogleMailsBasic = async function(context, vm) {
  let res = await vm.$http.get("google/basic/gmail");
  if (context.state.connexions.google) {
    context.commit("SET_GOOGLE_MAIL_DATA", res.data);
  } else {
    cleaners.removeGoogleData(context);
  }
};

let getGoogleMailsAnalytics = async function(context, vm) {
  context.commit("SET_GOOGLE_ANALYTICS_FETCHING_STATE", true);
  let res = await vm.$http.get("google/analytics/gmail");
  context.commit("SET_GOOGLE_ANALYTICS_FETCHING_STATE", false);
  if (context.state.connexions.google) {
    context.commit("SET_GOOGLE_ANALYTICS_DATA", res.data);
  } else {
    cleaners.removeGoogleData(context);
  }
};

let getGooglePeople = async function(context, vm) {
  context.commit("SET_GOOGLE_FETCHING_STATE", true);
  let res = await vm.$http.get("google/basic/people");
  context.commit("SET_GOOGLE_FETCHING_STATE", false);
  if (context.state.connexions.google) {
    context.commit("SET_GOOGLE_PEOPLE_DATA", res.data);
  } else {
    cleaners.removeGoogleData(context);
  }
};

let getFacebookPeople = async function(context, vm) {
  context.commit("SET_FACEBOOK_FETCHING_STATE", true);
  let res = await vm.$http.get("facebook/basic");
  context.commit("SET_FACEBOOK_FETCHING_STATE", false);
  if (context.state.connexions.facebook) {
    context.commit("SET_FACEBOOK_PEOPLE_DATA", res.data);
  } else {
    cleaners.removeFacebookData(context);
  }
};

let googleHelpers = {
  basic: {
    getGooglePeople,
    getGoogleMailsBasic
  },
  analytics: {
    getGoogleMailsAnalytics
  }
};

let facebookHelpers = {
  basic: {
    getFacebookPeople
  }
};

let fetchers = {
  basic: {
    facebook: [getFacebookPeople],
    google: [getGooglePeople, getGoogleMailsBasic]
  },
  analytics: {
    facebook: [],
    google: [getGoogleMailsAnalytics]
  }
};

export { googleHelpers, facebookHelpers, fetchers };
