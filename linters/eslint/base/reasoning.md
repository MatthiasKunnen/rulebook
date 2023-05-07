# Reasoning

### [`accessor-pairs`](https://eslint.org/docs/latest/rules/accessor-pairs)
No, it could be useful to have a public set but not allow public get.

### [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return)
No, it triggers for functions called on non-arrays.

### [`consistent-return`](https://eslint.org/docs/latest/rules/consistent-return)
Yes, can be handy in JavaScript when forgetting a return. Do not use in TypeScript where its purpose is watered down due to type checking.

### [`no-new-symbol`](https://eslint.org/docs/latest/rules/no-new-symbol)
No, implemented in [`no-new-native-nonconstructor`](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor).
