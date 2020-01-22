import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/Login";
import ResultsPage from "@/components/ResultsPage";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Axios from "axios";

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
	if (to.query.code &&
		to.path == "/code") {
		try {
			await Axios.get(process.env.VUE_APP_API_URL + "/login/googleToken", { params: { code: to.query.code.toString() } })
			next({
				path: "/"
			});

		} catch (error) {
			next({
				path: "/login"
			});
		}
	} else {
		next()
	}
	document.title = "WhoAmI";
});

export default router;
