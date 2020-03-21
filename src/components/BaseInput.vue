<template>
	<div class="base-input">
		<template v-if="!isCheckbox">
			<label :for="id" :class="classLabel">{{ label }}</label>
			<input
				:id="id"
				:type="type"
				:disabled="disabled"
				:required="required"
				:placeholder="placeholder"
				class="base-input__input"
				:class="classInput"
				:value="value"
				@input="$emit('input', $event.target.value)"
			/>
		</template>

		<template v-else>
			<input
				:id="id"
				:type="type"
				:disabled="disabled"
				:required="required"
				:placeholder="placeholder"
				:class="classInput"
				:checked="value"
				@change="$emit('input', $event.target.checked)"
			/>
			<label
				v-if="isCheckbox"
				:for="id"
				class="base-input__label--checkbox"
				:class="classLabel"
			>{{ label }}</label>
		</template>
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
		disabled: {
			type: Boolean,
			default: false
		},
		required: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		},
		classInput: {
			default: ''
		},
		value: {
			type: [String, Boolean],
			default: ''
		}
	},
	computed: {
		isCheckbox() {
			return ['checkbox', 'radio'].includes(this.type);
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

.base-input__label--checkbox {
	margin-left: 0.5em;
	font-size: 0.8em;
}
</style>
