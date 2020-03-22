<template>
	<form class="the-login-form" @submit.prevent="login">
		<BaseInput
			input-id="username"
			label="Username"
			v-model="username"
			class="mb"
			:disabled="disabled || loading"
			required
		/>
		<BaseInput
			input-id="password"
			type="password"
			label="Password"
			v-model="password"
			class="mb"
			:disabled="disabled || loading"
			required
		/>
		<BaseInput
			input-id="remember-me"
			type="checkbox"
			label="Remember me"
			v-model="rememberMe"
			class="the-login-form__checkbox"
			:disabled="disabled || loading"
		/>
		<div class="the-login-form__button">
			<BaseButton type="submit" title="Login" :disabled="disabled || loading" />
		</div>
	</form>
</template>

<script>
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
			rememberMe: false,
			loading: false
		};
	},
	methods: {
		async login() {
			this.loading = true;
			try {
				await this.$store.dispatch('auth/login', {
					credentials: {
						username: this.username,
						password: this.password
					},
					rememberMe: this.rememberMe
				});

				await this.$router.push({ name: 'Dashboard' });
			} catch (error) {
				if (error.response) {
					// Server responded with an error status code
				} else if (error.request) {
					// Request was made, but didn't receive any response back
				} else {
					// Request was bad
				}
			}
			this.loading = false;
		}
	}
};
</script>

<style scoped>
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

.the-login-form__checkbox {
	font-size: 0.8em;
}
</style>
