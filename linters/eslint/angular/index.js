const tslintBase = {
    'align': [true, 'elements', 'members', 'parameters', 'statements'],
    'jsdoc-format': true,
    'one-line': [
        true,
        'check-open-brace',
        'check-catch',
        'check-else',
        'check-whitespace',
    ],
    'prefer-while': true,
    'strict-type-predicates': true,
    'whitespace': [
        true,
        'check-branch',
        'check-decl',
        'check-operator',
        'check-rest-spread',
        'check-separator',
        'check-type',
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
    extends: [
        '@matthiaskunnen/eslint-typescript',
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
        'strict': 'error',
    },
};
