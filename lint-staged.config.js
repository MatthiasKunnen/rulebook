function mapFilenames(filenames) {
    return filenames.map(filename => `"${filename}"`).join(' ');
}

module.exports = {
    'linters/eslint/**/*.js': (filenames) => [
        `yarn run lint:linters:base --fix --cache ${mapFilenames(filenames)}`,
    ],
};
