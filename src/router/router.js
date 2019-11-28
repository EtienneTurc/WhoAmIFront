import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Login from '@/components/Login'
import ResultsPage from '@/components/ResultsPage'

Vue.use(Router)

let router = new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: Login,
    }, {
        path: '/',
        name: 'ResultsPage',
        component: ResultsPage,
        meta: {
            title: "WhoAmI.com"
        }
    }],
    mode: 'history',
})

router.beforeEach(async(to, from, next) => {
    document.title = to.meta.title
        // Check auth
    if (localStorage.getItem('token') == null && !to.query.code && to.path != "/login") {
        next({
            path: '/login',
        })
    } else {
        next()
    }
})

export default router