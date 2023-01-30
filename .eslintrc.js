module.exports = {
	extends: require.resolve("@umijs/max/eslint"),
	rules: {
		"@typescript-eslint/no-unused-vars": 1,
		indent: ["error", "tab"],
		"react/jsx-indent": 0,
		"react/jsx-indent-props": [2, "tab"],
		camelcase: 1,
	},
};
