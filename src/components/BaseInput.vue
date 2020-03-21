<template>
	<div class="base-input">
		<label :for="id" :class="classLabel">{{ label }}</label>
		<input
			:id="id"
			:type="type"
			:placeholder="placeholder"
			class="base-input__input"
			:class="classInput"
			:value="value"
			@input="$emit('input', $event.target.value)"
		/>
	</div>
</template>

<script>
export default {
	name: 'BaseInput',
	props: {
		id: {
			type: String,
			required: true
		},
		classLabel: {
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			default: ''
		},
		classInput: {
			default: ''
		},
		value: {
			type: String,
			default: ''
		}
	}
};
</script>

<style scoped>
.base-input {
	max-width: 33rem;
}

.base-input__input {
	display: block;
	width: 100%;
}
</style>
