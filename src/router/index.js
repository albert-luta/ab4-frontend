import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store/index';

import Login from '@/views/Login.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: {
			name: 'Login'
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			requiresVisitor: true
		}
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '*',
		name: '404',
		component: () => import('@/views/404.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!store.getters['auth/loggedIn']) {
			next({
				name: 'Login'
			});
		} else {
			next();
		}
	} else if (to.matched.some((record) => record.meta.requiresVisitor)) {
		if (store.getters['auth/loggedIn']) {
			next({
				name: 'Dashboard'
			});
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
