module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        '@matthiaskunnen/eslint-config-typescript',
    ],
    rules: {
        'no-console': 'error',
        'strict': 'error',
    },
};
