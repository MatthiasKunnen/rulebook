module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    plugins: [
        'import',
        'unicorn',
    ],
    rules: {
        'array-bracket-newline': [
            'error',
            'consistent',
        ],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'arrow-spacing': 'error',
        'brace-style':
            [
                'error',
                '1tbs',
                {
                    allowSingleLine: false,
                },
            ],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': ['error', 'never'],
        'constructor-super': 'error',
        'curly': 'error',
        'dot-location': ['error', 'property'],
        'eol-last': 'error',
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore',
            },
        ],
        'for-direction': 'error',
        'func-call-spacing': ['error', 'never'],
        'func-names': ['error'],
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true,
            },
        ],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'generator-star-spacing': 'error',
        'getter-return': 'error',
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],
        'guard-for-in': 'error',
        'implicit-arrow-linebreak': ['error', 'beside'],
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-deprecated': 'warn',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/order': [
            'error',
            {
                'alphabetize':
                    {
                        order: 'asc',
                    },
                'groups': ['builtin', 'external'],
                'newlines-between': 'always',
            },
        ],
        'indent': ['error', 4],
        'key-spacing': [
            'error',
            {
                afterColon: true,
                beforeColon: false,
                mode: 'strict',
            },
        ],
        'keyword-spacing': 'error',
        'max-len': ['error', 100],
        'max-statements-per-line': ['error', {max: 1}],
        'multiline-ternary': ['error', 'always-multiline'],
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': [
            'error',
            'all',
            {
                nestedBinaryExpressions: false,
            },
        ],
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'error',
        'no-irregular-whitespace': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-misleading-character-class': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 1,
            },
        ],
        'no-negated-condition': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-setter-return': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'no-shadow-restricted-names': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-newline': [
            'error',
            {
                consistent: true,
                multiline: true,
            },
        ],
        'object-curly-spacing': ['error', 'never'],
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': [
            'error',
            {
                blocks: 'never',
                switches: 'never',
            },
            {
                allowSingleLineBlocks: false,
            },
        ],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        'quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        'radix': 'error',
        'require-await': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'semi': ['error', 'always'],
        'semi-spacing': ['error', {after: true, before: false}],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error'],
        'space-unary-ops': [
            'error',
            {
                nonwords: false,
                words: true,
            },
        ],
        'spaced-comment': 'error',
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'unicorn/filename-case': 'error',
        'use-isnan': [
            'error',
            {
                enforceForSwitchCase: true,
            },
        ],
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: true,
            },
        ],
        'yield-star-spacing': 'error',
        'yoda': 'error',
    },
};
