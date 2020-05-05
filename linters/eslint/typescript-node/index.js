module.exports = {
    env: {
        node: true,
    },
    extends: [
        '@matthiaskunnen/eslint-typescript',
    ],
    rules: {
        'no-console': 'error',
        'strict': 'error',
    },
};
