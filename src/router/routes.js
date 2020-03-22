import Login from '@/views/Login.vue';

export default [
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
