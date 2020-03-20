<template>
	<div class="container">
		<h1>Kite</h1>
		<TheLoginForm />
	</div>
</template>

<script>
import TheLoginForm from '../components/TheLoginForm.vue';

export default {
	name: 'Login',
	components: {
		TheLoginForm
	}
};
</script>

<style scoped>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
