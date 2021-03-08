const tslintRules = {
    'align': [
        true,
        'elements',
        'members',
        'parameters',
        'statements',
    ],
    'jsdoc-format': true,
    'prefer-while': true,
    'strict-type-predicates': true,
    'whitespace': [
        true,
        'check-type-operator',
    ],
};

module.exports = {
    env: {
        es6: true,
    },
    extends: [
        '@matthiaskunnen/eslint-config-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
    ],
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'generic',
            },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/comma-spacing': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'no-public',
            },
        ],
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        //  Off Until indent for type and decorator are fixed
        // See https://github.com/typescript-eslint/typescript-eslint/issues/1824
        // '@typescript-eslint/indent': [
        //     'error',
        //     4,
        //     {
        //         ArrayExpression: 'first',
        //         CallExpression:
        //             {
        //                 arguments: 'first',
        //             },
        //         FunctionDeclaration:
        //             {
        //                 body: 1,
        //                 parameters: 'first',
        //             },
        //         FunctionExpression:
        //             {
        //                 body: 1,
        //                 parameters: 'first',
        //             },
        //         ImportDeclaration: 'first',
        //         ObjectExpression: 'first',
        //         SwitchCase: 1,
        //     },
        // ],
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                    'signature',
                ],
            },
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/naming-convention': [
            'error',
            {format: ['camelCase'], selector: 'default'},
            {format: ['PascalCase'], selector: 'typeLike'},
            {format: ['PascalCase'], selector: 'enumMember'},
            {format: ['camelCase'], leadingUnderscore: 'allow', selector: 'method'},
            {format: ['camelCase'], leadingUnderscore: 'allow', selector: 'parameter'},
            {format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow', selector: 'variable'},
            {format: ['camelCase', 'PascalCase', 'UPPER_CASE'], modifiers: ['const'], selector: 'variable'},
            {format: null, selector: 'classProperty'},
            {format: null, selector: 'objectLiteralProperty'},
            {format: null, selector: 'typeProperty'},
        ],
        '@typescript-eslint/no-confusing-void-expression': 'error',
        // '@typescript-eslint/no-duplicate-imports': 'error', Waiting on https://github.com/eslint/eslint/issues/12758
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'off',
        '@typescript-eslint/no-extra-parens': [
            'error',
            'all',
            {
                nestedBinaryExpressions: false,
            },
        ],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                classes: true,
                enums: true,
                functions: false,
                typedefs: true,
                variables: true,
            },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        '@typescript-eslint/space-infix-ops': 'error',
        '@typescript-eslint/strict-boolean-expressions': [
            'error',
            {
                allowAny: false,
                allowNullableBoolean: false,
                allowNullableNumber: false,
                allowNullableObject: false,
                allowNullableString: false,
                allowNumber: false,
                allowString: false,
            },
        ],
        '@typescript-eslint/tslint/config': [
            'error',
            {
                rules: tslintRules,
            },
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unbound-method': [
            'error',
            {
                ignoreStatic: true,
            },
        ],
        '@typescript-eslint/unified-signatures': 'error',
        'brace-style': 'off', // Would fight with TS rule
        'comma-dangle': 'off', // Would fight with TS rule
        'comma-spacing': 'off', // Would fight with TS rule
        'func-call-spacing': 'off', // Would fight with TS rule
        'indent': 'off', // Would fight with TS rule
        'keyword-spacing': 'off', // Would fight with TS rule
        'no-confusing-arrow': 'off', // With types this should be clear enough
        'no-dupe-class-members': 'off', // The rule errors on method overloads and TypeScript already disallows dupes
        'no-duplicate-imports': 'off', // Would fight with TS rule
        'no-extra-parens': 'off', // Would fight with TS rule
        'no-invalid-this': 'off', // Reconsider when https://github.com/typescript-eslint/typescript-eslint/issues/491 is fixed
        'no-redeclare': 'off', // Would fight with TS rule
        'no-shadow': 'off', // Would fight with TS rule
        'no-throw-literal': 'off', // Would fight with TS rule
        'no-unused-expressions': 'off', // Would fight with TS rule
        'no-unused-vars': 'off', // Use tsconfig's noUnusedLocals
        'no-use-before-define': 'off', // Would fight with TS rule
        'no-useless-constructor': 'off', // Would fight with TS rule
        'object-curly-spacing': 'off', // Would fight with TS rule
        'quotes': 'off', // Would fight with TS rule
        'require-await': 'off', // Fights with @typescript-eslint/promise-function-async
        'semi': 'off', // Would fight with TS rule
        'space-before-function-paren': 'off', // Would fight with TS rule
        'space-infix-ops': 'off', // Would fight with TS rule
    },
};
