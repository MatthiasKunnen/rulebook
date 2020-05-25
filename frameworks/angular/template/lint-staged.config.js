function mapFilenames(filenames) {
    return filenames.map(filename => `"${filename}"`).join(' ');
}

module.exports = {
    '**/*.scss': (filenames) => [
        `yarn run stylelint --syntax scss --fix ${mapFilenames(filenames)}`,
    ],
    '**/*.ts': (filenames) => [
        `yarn run lint:ts --fix --cache ${mapFilenames(filenames)}`,
        `yarn run compile:ts`,
    ],
};
