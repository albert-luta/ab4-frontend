<template>
	<section class="the-login-form">
		<BaseInput id="username" label="Username" v-model="username" class="mb" />
		<BaseInput id="password" type="password" label="Password" v-model="password" />
		<div class="the-login-form__button">
			<BaseButton />
		</div>
	</section>
</template>

<script>
export default {
	name: 'TheLoginForm',
	data() {
		return {
			username: '',
			password: ''
		};
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
