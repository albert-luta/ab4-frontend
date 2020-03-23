import axios from '@/services/api/config';

export default {
	namespaced: true,

	state: {
		accessToken: localStorage.getItem('accessToken') || null
	},
	mutations: {
		SET_ACCESS_TOKEN(state, accessToken) {
			state.accessToken = accessToken;
		},
		DESTROY_ACCESS_TOKEN(state) {
			state.accessToken = null;
		}
	},
	actions: {
		async login({ commit }, { credentials, rememberMe }) {
			const res = await axios.post('/login', credentials);
			const { userId } = res.data;

			commit('SET_ACCESS_TOKEN', userId);
			if (rememberMe) {
				localStorage.setItem('accessToken', userId);
			}
		},
		logout({ commit }) {
			commit('DESTROY_ACCESS_TOKEN');
			localStorage.removeItem('accessToken');
		}
	},
	getters: {
		loggedIn(state) {
			return state.accessToken !== null;
		}
	}
};
