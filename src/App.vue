<template>
	<router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
*,
*::before,
*::after {
	box-sizing: border-box;
}
:root {
	--clr-blue: #4a90e2;
	--clr-red: #ff3b30;
	--clr-gold: #e8b100;

	font-size: 62.5%;
}
body {
	font: 1.6rem/1.5 sans-serif;
}
img {
	display: block;
	max-width: 100%;
}
</style>
