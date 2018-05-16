# TSLint
To provide company-wide consistency for our TypeScript code we employ the
[TSLint package](https://www.npmjs.com/package/tslint). The configuration
can be found in `tslint-angular.json` for Angular projects and in
`tslint-node.json` for node projects. Copy the correct one to the root of your
project and rename it to `tslint.json`. The node version is the default in other
cases.

There is a difference between the two since Angular projects have extra rules
for component naming et cetera.

Add the following script to your package.json:
`"ts-lint": "tslint -p tsconfig.json"`.  
To run the linter execute `npm run ts-lint` and to do automatic fixing, run
`npm run ts-lint -- --fix`.

The glob pattern can be changed to match the correct path.
