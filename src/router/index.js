import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store/index';
import routes from './routes';

Vue.use(VueRouter);

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
