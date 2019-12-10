import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/Login";
import ResultsPage from "@/components/ResultsPage";
import About from "@/components/About";
import Contact from "@/components/Contact";

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

router.beforeEach(async(to, from, next) => {
    document.title = to.meta.title;
    // Check auth
    if (
        localStorage.getItem("token") == null &&
        !to.query.code &&
        to.path == "/"
    ) {
        next({
            path: "/login"
        });
    } else {
        next();
    }
    document.title = "WhoAmI";
});

export default router;