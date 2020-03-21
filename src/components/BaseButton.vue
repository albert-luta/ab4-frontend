<template>
	<button :type="type" :disabled="disabled" @click="onClick" class="base-button">
		<slot>{{ title }}</slot>
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
	data() {
		return {
			console: ''
		};
	},
	props: {
		type: {
			type: String,
			default: 'button',
			validator: (type) => ['button', 'submit', 'reset'].includes(type)
		},
		disabled: {
			type: Boolean,
			default: false
		},
		onClick: {
			type: Function,
			default: () => {}
		},
		title: {
			type: String,
			default: 'Button'
		}
	}
};
</script>

<style>
.base-button {
	border: 0;
	padding: 0;
	display: inline-block;

	background: var(--clr-blue);
	color: white;
	box-shadow: 0.01em 0.08em 0.2em rgba(0, 0, 0, 0.45);

	padding: 0.55em 0.75em;
	min-width: 7.5em;
}

.base-button:hover {
	filter: brightness(115%);
	cursor: pointer;
}

.base-button:disabled {
	filter: brightness(75%);
	cursor: default;
}
</style>
