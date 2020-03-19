module.exports = {
	root: true,
	env: { node: true },
	extends: ['plugin:vue/essential', '@vue/airbnb'],
	parserOptions: { parser: 'babel-eslint' },
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'never'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'linebreak-style': ['error', 'windows']
	}
};
