import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/Login";
import ResultsPage from "@/components/ResultsPage";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Axios from "axios";

import {
	store
} from "../store/index"

Vue.use(Router);

let router = new Router({
	routes: [{
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

router.beforeEach(async (to, from, next) => {
	document.title = to.meta.title;
	// Check auth
	if (store.state.tokenGoogle) {
		next();
	}
	else if (to.query.code &&
		to.path == "/code") {
		try {
			let res = await Axios.get(process.env.VUE_APP_API_URL + "/login/googleToken", { params: { code: to.query.code.toString() } })
			store.commit("setTokenGoogle", res.data)
			next({
				path: "/"
			});

		} catch (error) {
			next({
				path: "/login"
			});
		}
	} else {
		if (to.path == "/login")
			next()
		else
			next({
				path: "/login"
			});
	}
	document.title = "WhoAmI";
});

export default router;
