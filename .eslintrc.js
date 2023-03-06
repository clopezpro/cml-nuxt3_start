module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},

	parserOption: {
		ecmaVersion: 2020,
		sourceType: "module",
		parser: "@typescript-eslint/parser",
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:vue/vue3-recommended",
		"plugin:nuxt/recommended",
	],
	plugins: ["@typescript-eslint"],
	rules: {
		"no-console": "off",
		"vue/script-setup-uses-vars": "off",
	},
};