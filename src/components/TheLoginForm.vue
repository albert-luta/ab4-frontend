<template>
	<form class="the-login-form" @submit.prevent="login">
		<BaseInput
			id="username"
			label="Username"
			v-model="username"
			class="mb"
			:disabled="disabled"
			required
		/>
		<BaseInput
			id="password"
			type="password"
			label="Password"
			v-model="password"
			class="mb"
			:disabled="disabled"
			required
		/>
		<BaseInput
			id="remember-me"
			type="checkbox"
			label="Remember me"
			v-model="rememberMe"
			:disabled="disabled"
		/>
		<div class="the-login-form__button">
			<BaseButton type="submit" title="Login" :disabled="disabled" />
		</div>
	</form>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'TheLoginForm',
	props: {
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			username: '',
			password: '',
			rememberMe: false
		};
	},
	computed: mapState('auth', {
		userId: (state) => state.accesToken
	}),
	methods: {
		async login() {
			try {
				await this.$store.dispatch('auth/login', {
					username: this.username,
					password: this.password
				});

				this.$router.push({ name: 'Map', params: { userId: this.userId } });
			} catch (error) {
				if (error.response) {
					// Server responded with an error status code
				} else if (error.request) {
					// Request was made, but didn't receive any response back
				} else {
					// Request was bad
				}
			}
		}
	},
	created() {
		/*
		if (this.userId !== null) {
			this.$router.push({ name: 'Map', params: { userId: this.userId } });
		} */
	}
};
</script>

<style>
.the-login-form {
	width: 100%;
	max-width: 33rem;
}

.mb {
	margin-bottom: 1.5rem;
}

.the-login-form__button {
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 3.8rem;
}
</style>
