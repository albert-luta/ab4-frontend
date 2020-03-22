<template>
	<form class="the-login-form" @submit.prevent="login">
		<BaseInput
			input-id="username"
			label="Username"
			v-model="username"
			class="mb"
			:disabled="disabled"
			required
		/>
		<BaseInput
			input-id="password"
			type="password"
			label="Password"
			v-model="password"
			class="mb"
			:disabled="disabled"
			required
		/>
		<BaseInput
			input-id="remember-me"
			type="checkbox"
			label="Remember me"
			v-model="rememberMe"
			class="the-login-form__checkbox"
			:disabled="disabled"
		/>
		<div class="the-login-form__button">
			<BaseButton type="submit" title="Login" :disabled="disabled" />
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
			rememberMe: false
		};
	},
	methods: {
		async login() {
			try {
				await this.$store.dispatch('auth/login', {
					credentials: {
						username: this.username,
						password: this.password
					},
					rememberMe: this.rememberMe
				});

				this.$router.push({ name: 'Dashboard' });
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

.the-login-form__checkbox {
	font-size: 0.8em;
}
</style>
