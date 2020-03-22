<template>
	<div class="container">
		<h1 class="logo">Kite</h1>
		<TheLoginForm />
	</div>
</template>

<script>
import TheLoginForm from '@/components/TheLoginForm.vue';

import { mapState, mapGetters } from 'vuex';

export default {
	name: 'Login',
	computed: {
		...mapState('auth', {
			accesToken: (state) => state.accesToken
		}),
		...mapGetters('auth', ['loggedIn'])
	},
	created() {
		if (this.loggedIn) {
			this.$router.push({ name: 'Dashboard' });
		}
	},
	components: {
		TheLoginForm
	}
};
</script>

<style scoped>
.container {
	width: 90%;
	min-height: 100vh;
	max-width: 100rem;
	margin: 0 auto;
	padding-top: 20vh;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.logo {
	font-size: 13.5vw;
	margin: 3rem 0 3rem 0;
}

@media (min-width: 555px) {
	.logo {
		font-size: 75px;
	}
}
</style>
