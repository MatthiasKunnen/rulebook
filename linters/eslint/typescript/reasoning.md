# Reasoning

### [`@typescript-eslint/explicit-module-boundary-types`](https://typescript-eslint.io/rules/explicit-module-boundary-types)
Under consideration.

### [`@typescript-eslint/no-require-imports`](https://typescript-eslint.io/rules/no-require-imports)
No, disallows `import name = require('nodemailer/lib/mail-composer')`. This is sometimes needed for modules that `export = MailComposer`. 

`import c from 'nodemailer/lib/mail-composer'` results in:
> TS1259: Module ? can only be default-imported using the 'allowSyntheticDefaultImports' flag

However, while this works for ESModules, using `allowSyntheticDefaultImports` wrongfully adds `.default` in the transpiled CJS code.

`import * as c from 'nodemailer/lib/mail-composer';` results in:
> TS2497: This module can only be referenced with ECMAScript imports/exports by turning on the 'allowSyntheticDefaultImports' flag and referencing its default export.

If you need to forbid `import ? = require`, use `esModuleInterop: true`.

### [`@typescript-eslint/no-type-alias`](https://typescript-eslint.io/rules/no-type-alias)
No, type aliases have their purpose.
