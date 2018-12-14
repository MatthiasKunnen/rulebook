# Stylelint
To maintain a code base, measures need to be taken in order to ensure code consistency. For SCSS and
CSS code, [StyleLint](https://www.npmjs.com/package/stylelint) is used. The configuration can be
found in `.stylelintrc`.

Add the following script to your package.json:
`"css-lint": "stylelint "src/**/*.scss" --syntax scss"`.

The glob pattern can be changed to match the correct path.
