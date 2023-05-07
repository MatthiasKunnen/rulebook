module.exports = {
    env: {
        es6: true,
        node: true,
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
    ],
    root: true,
};
