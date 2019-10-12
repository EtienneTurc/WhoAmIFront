import Vue from 'vue'
import Router from 'vue-router'

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
	if (to.query.code) {
		localStorage.setItem('code', to.query.code)
		next({
			path: to.path,
			query: {}
		})
	} else if (localStorage.getItem('code') == null && to.path != "/login") {
		next({
			path: '/login',
		})
	} else
		next()
})

export default router
