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
			:disabled="disabled"
			required
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
			password: ''
		};
	},
	methods: {
		login() {}
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
