module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 13,
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
	},
}
