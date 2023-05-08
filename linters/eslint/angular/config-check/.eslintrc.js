module.exports = {
    env: {
        es6: true,
    },
    overrides: [
        {
            extends: [
                '../index.js',
            ],
            files: [
                '*.ts',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['./tsconfig.json'],
                sourceType: 'module',
            },
        },
        {
            extends: [
                '../templates.js',
            ],
            files: [
                '*.html',
            ],
        },
    ],
    root: true,
};
