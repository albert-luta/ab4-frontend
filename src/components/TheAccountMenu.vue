<template>
	<div class="account-menu">
		<img
			src="@/assets/account.svg"
			alt="Account icon"
			class="account-menu__avatar"
			@click="isVisible = !isVisible"
		/>

		<ul v-show="isVisible" class="account-menu__list">
			<li class="account-menu__list-item">
				<img src="@/assets/logout.svg" alt="Logout icon" class="account-menu__logout-icon" />
				Logout
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TheAccountMenu',
	data() {
		return {
			isVisible: false
		};
	}
};
</script>

<style scoped>
.account-menu {
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
}

.account-menu__avatar {
	width: 2.6rem;
}

.account-menu__list {
	margin: 0;
	padding: 0;
	list-style: none;

	position: absolute;
	top: 120%;
	right: 0;

	background: #f5f5f4;
	border-radius: 2%;
	box-shadow: 0 0.25em 0.3em rgba(0, 0, 0, 0.35);

	font-size: 1.35rem;
	color: var(--clr-red);
}

.account-menu__list-item {
	display: flex;
	align-items: center;

	padding: 0.85em 1.1em;
}

.account-menu__list-item:hover {
	background: #e5e5e2;
}

.account-menu__avatar:hover,
.account-menu__list-item:hover {
	cursor: pointer;
}

.account-menu__logout-icon {
	width: 1.6em;
	margin-right: 0.7em;
}
</style>
