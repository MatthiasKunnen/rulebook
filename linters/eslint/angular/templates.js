module.exports = {
    parser: '@angular-eslint/template-parser',
    plugins: ['@angular-eslint/template'],
    rules: {
        '@angular-eslint/template/banana-in-box': 'error',
        '@angular-eslint/template/button-has-type': 'error',
        '@angular-eslint/template/click-events-have-key-events': 'error',
        '@angular-eslint/template/elements-content': 'error',
        '@angular-eslint/template/eqeqeq': [
            'error',
            {
                allowNullOrUndefined: true,
            },
        ],
        '@angular-eslint/template/interactive-supports-focus': 'error',
        '@angular-eslint/template/label-has-associated-control': 'error',
        '@angular-eslint/template/mouse-events-have-key-events': 'error',
        '@angular-eslint/template/no-duplicate-attributes': 'error',
        '@angular-eslint/template/no-interpolation-in-attributes': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
        '@angular-eslint/template/no-positive-tabindex': 'error',
        '@angular-eslint/template/role-has-required-aria': 'error',
        '@angular-eslint/template/valid-aria': 'error',
    },
};
