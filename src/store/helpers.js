let removeGoogleData = function(context) {
  context.commit("SET_GOOGLE_PEOPLE_DATA", null);
  context.commit("SET_GOOGLE_MAIL_DATA", null);
  context.commit("SET_GOOGLE_ANALYTICS_DATA", {});
};

let removeFacebookData = function(context) {
  context.commit("SET_FACEBOOK_PEOPLE_DATA", null);
};

let cleaners = {
  google: removeGoogleData,
  facebook: removeFacebookData
};

export { cleaners };
