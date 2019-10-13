import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(Router)

let router = new Router({
	routes: [{
		path: '/login',
		name: 'login',
		component: Login,
	}, {
		path: '/',
		name: 'Main',
		component: Main,
	}],
	mode: 'history',
})

router.beforeEach(async (to, from, next) => {
	// Check auth
	if (localStorage.getItem('token') == null && !to.query.code && to.path != "/login") {
		next({
			path: '/login',
		})
	} else
		next()
})

export default router
