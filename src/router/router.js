import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/Login";
import ResultsPage from "@/components/ResultsPage";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Axios from "axios";

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
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ],
  mode: "history"
});

// let oauthRoutes = process.env.VUE_APP_LOGINS.split(",").map(l => "/oauth" + l);
// console.log(oauthRoutes)

// router.beforeEach(async (to, from, next) => {
// 	document.title = to.meta.title;
// 	if (to.query.code &&
// 		oauthRoutes.includes(to.path)) {
// 		try {
// 			let service = to.path.split("oauth")[1].toLowerCase() + "Token"
// 			await Axios.get(process.env.VUE_APP_API_URL + "/login/" + service, { params: { code: to.query.code.toString() } })
// 			next({
// 				path: "/"
// 			});

// 		} catch (error) {
// 			next({
// 				path: "/login"
// 			});
// 		}
// 	} else {
// 		next()
// 	}
// 	document.title = "WhoAmI";
// });

router.beforeEach(async (to, from, next) => {
  if (to.query.code) {
    console.log("to", to);

    try {
      let service = to.path.split("oauth")[1].toLowerCase() + "Token";
      console.log(service);
      await Axios.get(process.env.VUE_APP_API_URL + "/login/" + service, {
        params: { code: to.query.code.toString() }
      });
      next({
        path: "/"
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log(to);

    next();
  }
});

export default router;
