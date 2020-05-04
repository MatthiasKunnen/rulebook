# TSLint
To provide consistency in TypeScript code and avoid shooting ourself in the foot it is a great aid
to use [TSLint](https://www.npmjs.com/package/tslint). The default configuration is `tslint.yaml`.
For Angular projects, use `tslint.angular.yaml`. Copy the correct one to the root of your project
and make sure it's called `tslint.yaml`. The node version is the default in other cases.

There is a difference between the two since Angular projects have extra rules for component naming
et cetera.

Add the following script to your package.json: `"lint:ts": "tslint -p tsconfig.json"`.
To run the linter execute `yarn run lint:ts` and to do automatic fixing, run
`yarn run lint:ts --fix`.
