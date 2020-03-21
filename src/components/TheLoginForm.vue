<template>
	<form class="the-login-form" @submit.prevent="onSubmit">
		<BaseInput id="username" label="Username" v-model="username" class="mb" />
		<BaseInput id="password" type="password" label="Password" v-model="password" />
		<div class="the-login-form__button">
			<BaseButton type="submit" />
		</div>
	</form>
</template>

<script>
export default {
	name: 'TheLoginForm',
	data() {
		return {
			username: '',
			password: ''
		};
	},
	methods: {
		onSubmit() {}
	}
};
</script>

<style>
.mb {
	margin-bottom: 1.2rem;
}

.the-login-form__button {
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 2.25rem;
}
</style>
