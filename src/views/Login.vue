<template>
	<div class="container">
		<h1 class="logo">Kite</h1>
		<TheLoginForm />
		<BaseInput label="Label" />
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
	font-size: 10vw;
}

@media (min-width: 750px) {
	.logo {
		font-size: 75px;
	}
}
</style>
