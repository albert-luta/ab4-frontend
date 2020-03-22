import axios from '@/services/api/config';

export default {
	namespaced: true,

	state: {
		accesToken: localStorage.getItem('accesToken') || null
	},
	mutations: {
		SET_ACCES_TOKEN(state, accesToken) {
			state.accesToken = accesToken;
		}
	},
	actions: {
		async login({ commit }, { credentials, rememberMe }) {
			const res = await axios.post('/login', credentials);
			const { userId } = res.data;

			commit('SET_ACCES_TOKEN', userId);
			if (rememberMe) {
				localStorage.setItem('accesToken', userId);
			}
		}
	},
	getters: {
		loggedIn(state) {
			return state.accesToken !== null;
		}
	}
};
