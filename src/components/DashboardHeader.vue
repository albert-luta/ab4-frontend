<template>
	<BaseHeader>
		<div class="dashboard-header">
			<BaseButton title="ADD SPOT" class="dashboard-header__add-spot" />
			<TheAccountMenu class="dashboard-header__account" />
		</div>
	</BaseHeader>
</template>

<script>
import TheAccountMenu from './TheAccountMenu.vue';

export default {
	name: 'DashboardHeader',
	components: {
		TheAccountMenu
	}
};
</script>

<style scoped>
.dashboard-header {
	display: flex;
	justify-content: flex-end;
}

.dashboard-header__add-spot {
	font-size: 1.4rem;
}

.dashboard-header__account {
	margin-left: 5rem;
}
</style>
