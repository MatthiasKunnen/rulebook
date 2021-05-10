module.exports = {
    env: {
        es6: true,
    },
    extends: [
        '@matthiaskunnen/eslint-config-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', '@angular-eslint'],
    rules: {
        '@angular-eslint/component-class-suffix': 'error',
        '@angular-eslint/component-selector': [
            'error',
            {
                prefix: 'app',
                style: 'kebab-case',
                type: 'element',
            },
        ],
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/directive-selector': [
            'error',
            {
                prefix: 'app',
                style: 'camelCase',
                type: 'attribute',
            },
        ],
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-host-metadata-property': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-output-native': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
        'no-alert': 'error',
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        message: 'Use @apollo/client/core instead to avoid react dependency.',
                        name: '@apollo/client',
                    },
                ],
            },
        ],
        'strict': 'error',
    },
};
