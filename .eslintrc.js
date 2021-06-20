module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		'react-native/react-native': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'react-hooks', 'react-native'],
	settings: {
		react: {
			pragma: 'React', // Pragma to use, default to "React"
			version: 'detect', // React version. "detect" automatically picks the version you have installed.
		},
	},
	ignorePatterns: [
		'__mocks__/',
		'typings/',
		'node_modules/',
		'*.stories.tsx',
		'e2e',
		'metro.config.js',
		'babel.config.js',
	],
	rules: {
		semi: ['error', 'never'],
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					Object: 'Use object instead',
					String: {
						message: 'Use string instead',
						fixWith: 'string',
					},
					Number: {
						message: 'Use number instead',
						fixWith: 'number',
					},
					Symbol: {
						message: 'Use symbol instead',
						fixWith: 'symbol',
					},
				},
			},
		],

		// note you must disable the base rule as it can report incorrect errors
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/prefer-includes': 'off',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/explicit-member-accessibility': [
			'off',
			{
				accessibility: 'explicit',
			},
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/member-delimiter-style': [
			'off',
			{
				multiline: {
					delimiter: 'none',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/quotes': ['error', 'single', { allowTemplateLiterals: true }],
		'@typescript-eslint/semi': ['off', null],
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'no-use-before-define': 'off',
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'react/no-unescaped-entities': 'off',
		'arrow-parens': ['off', 'as-needed'],
		'comma-dangle': 'off',
		'no-underscore-dangle': 'off',
		complexity: 'off',
		'constructor-super': 'error',
		curly: 'error',
		'dot-notation': 'error',
		'eol-last': 'error',
		eqeqeq: ['error', 'smart'],
		'guard-for-in': 'error',
		'prefer-rest-params': 'off',
		'id-blacklist': ['error', 'Undefined'],
		'id-match': 'error',
		'import/order': 'off',
		'max-classes-per-file': 'off',
		'max-len': 'off',
		'new-parens': 'error',
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-empty': 'off',
		'no-eval': 'error',
		'no-fallthrough': 'error',
		'no-invalid-this': 'off',
		'no-multiple-empty-lines': 'error',
		'no-new-wrappers': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-unsafe-finally': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'one-var': ['error', 'never'],
		'prefer-arrow/prefer-arrow-functions': 'off',
		'prefer-const': 'error',
		'quote-props': ['error', 'as-needed'],
		radix: 'error',
		'spaced-comment': ['off', 'never'],
		'use-isnan': 'error',
		'valid-typeof': 'off',
		'no-extra-boolean-cast': 'off',
		'no-case-declarations': 'off',
		'no-unused-expressions': 'off',
		'react/jsx-curly-spacing': [2, 'never'],
		'react/jsx-wrap-multilines': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'no-useless-escape': 'off',
		'no-useless-catch': 'off',
		'no-async-promise-executor': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/require-await': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'off',
		'@typescript-eslint/await-thenable': 'off',
		'no-irregular-whitespace': 'off',
		'no-prototype-builtins': 'off',
		'react-native/no-unused-styles': 2,
		'react-native/no-color-literals': 2,
		'react-native/no-raw-text': [
			2,
			{
				skip: [
					'Body',
					'Caption',
					'Heading',
					'Label',
					'LargeTitle',
					'MarkdownBody',
					'SectionHeading',
					'StrikethroughText',
					'SubHeading',
					'TextWithDefaultFont',
					'Title',
					'TitleWithHeading',
				],
			},
		],
		'@typescript-eslint/no-unused-expressions': [
			//https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
			'error',
			{
				allowTernary: true,
				allowShortCircuit: true,
			},
		],
	},
}