module.exports = {
	plugins: [
	  "@typescript-eslint",
	  "eslint-comments",
	  "jest",
	  "promise",
	],
	extends: [
	  "airbnb-typescript/base",
	  "plugin:@typescript-eslint/recommended",
	  "plugin:eslint-comments/recommended",
	  "plugin:jest/recommended",
	  "plugin:promise/recommended",
	  "prettier",
	  "prettier/@typescript-eslint",
	  "plugin:prettier/recommended" 
	],

	env: {
	  node: true,
	  jest: true,
	},
	parserOptions: {
	  project: './tsconfig.json',
	},
	rules: {
	  "prettier/prettier": ["error", {
	   "endOfLine":"auto"
	  }],
	  // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
	  "no-prototype-builtins": "off",
	  // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
	  "import/prefer-default-export": "off",
	  "import/no-default-export": "error",
	    
	
	  // Use function hoisting to improve code readability
	  "no-use-before-define": [
		"error",
		{ functions: false, classes: true, variables: true },
	  ],
	  // Makes no sense to allow type inferrence for expression parameters, but require typing the response
	  "@typescript-eslint/explicit-function-return-type": [
		"error",
		{ allowExpressions: true, allowTypedFunctionExpressions: true },
	  ],
	  "@typescript-eslint/no-use-before-define": [
		"error",
		{ functions: false, classes: true, variables: true, typedefs: true },
	  ],
	},
  }