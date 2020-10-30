const tslintBase = {
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

const codelyzerRules = {
    'component-class-suffix': true,
    'component-selector': [true, 'element', 'app', 'kebab-case'],
    'contextual-lifecycle': true,
    'directive-class-suffix': true,
    'directive-selector': [true, 'attribute', 'app', 'camelCase'],
    'no-conflicting-lifecycle': true,
    'no-host-metadata-property': true,
    'no-input-rename': true,
    'no-inputs-metadata-property': true,
    'no-output-native': true,
    'no-output-on-prefix': true,
    'no-output-rename': true,
    'no-outputs-metadata-property': true,
    'template-banana-in-box': true,
    'template-no-negated-async': true,
    'use-lifecycle-interface': true,
    'use-pipe-transform-interface': true,
};

module.exports = {
    env: {
        es6: true,
    },
    extends: [
        '@matthiaskunnen/eslint-config-typescript',
    ],
    rules: {
        '@typescript-eslint/tslint/config': [
            'error',
            {
                rules: {
                    ...tslintBase,
                    ...codelyzerRules,
                },
                rulesDirectory: [
                    'codelyzer',
                ],
            },
        ],
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
