import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/pages/Login";
import ResultsPage from "@/components/pages/ResultsPage";
import Axios from "axios";

import { login } from "@/utils/login.js";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "ResultsPage",
      component: ResultsPage,
      meta: {
        title: "WhoAmI.com"
      }
    }
  ],
  mode: "history"
});

router.beforeEach(async (to, from, next) => {
  if (to.query.code) {
    try {
      let service = to.path.split("oauth")[1].toLowerCase() + "Token";
      await Axios.get(process.env.VUE_APP_API_URL + "/login/" + service, {
        params: { code: to.query.code.toString() }
      });
      let nextElements = to.query.state ? to.query.state.split(",") : [];
      if (nextElements.length) {
        login(nextElements);
      } else {
        next({
          path: "/"
        });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    next();
  }
});

export default router;
