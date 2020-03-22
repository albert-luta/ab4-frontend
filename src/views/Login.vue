<template>
	<div class="container login-container">
		<h1 class="logo">Kite</h1>
		<main class="main">
			<TheLoginForm />
		</main>
	</div>
</template>

<script>
import TheLoginForm from '@/components/TheLoginForm.vue';

export default {
	name: 'Login',
	components: {
		TheLoginForm
	}
};
</script>

<style scoped>
.login-container {
	min-height: 100vh;
	padding-top: 20vh;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.logo {
	font-size: 13.5vw;
	margin: 3rem 0 3rem 0;
}

.main {
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
}

@media (min-width: 555px) {
	.logo {
		font-size: 75px;
	}
}
</style>
