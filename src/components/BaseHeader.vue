<template>
	<header>
		<div class="container base-header__content-wrapper">
			<section class="base-header__logo">
				<h1>Kite</h1>
			</section>
			<section class="base-header__content">
				<slot />
			</section>
		</div>
	</header>
</template>

<script>
export default {
	name: 'BaseHeader'
};
</script>

<style scoped>
.base-header__content-wrapper {
	display: flex;
	align-items: center;

	padding: 1.2rem 0;
}

.base-header__logo {
	padding-right: 2rem;
}

.base-header__logo h1 {
	font-size: 3.5rem;
	margin: 0;
}

.base-header__content {
	flex: 1;
}
</style>
