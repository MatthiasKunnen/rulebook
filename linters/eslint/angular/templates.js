module.exports = {
    parser: '@angular-eslint/template-parser',
    plugins: ['@angular-eslint/template'],
    rules: {
        '@angular-eslint/template/banana-in-box': 'error',
        '@angular-eslint/template/eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore',
            },
        ],
        '@angular-eslint/template/no-negated-async': 'error',
    },
};
