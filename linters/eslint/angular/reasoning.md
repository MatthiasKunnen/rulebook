# Reasoning
Explains the reasoning behind certain decisions.

## Angular TypeScript rules

### `@angular-eslint/sort-ngmodule-metadata-arrays`
No, order can matter. The rules will be replaced, see <https://github.com/angular-eslint/angular-eslint/issues/1232>.


### [`@angular-eslint/use-injectable-provided-in`](https://github.com/angular-eslint/angular-eslint/blob/519ee5d8e2ad44e6ba0bb36e68ee83874f16cb7b/packages/eslint-plugin/docs/rules/use-injectable-provided-in.md)
No. Attempted but rejected for the following reasons:
- It incorrectly reports when a service is injectable but uses `{useClass}`. In this case it should not have a `providedIn`.
-  The main reason behind this rule seems to be the tree shaking it enables. However, `providedIn: SomeModule` has been deprecated. See <https://github.com/angular/angular/commit/e3cef4a7843d22fd004f1e27afcc42d0fbbef74a>.

## Angular template rules

### `@angular-eslint/template/button-has-type: error`
> Ensures that a button has a valid type specified

When a button does not have a type, it defaults to `submit`. If this button is placed in a form, could trigger an unexpected submit. Even when the button is not initially used in a form, it could be part of a component that is later used to a form. If the button has `type="button"`, this problem is avoided. 

### `@angular-eslint/template/click-events-have-key-events`
This rule will be triggered when an element that:
- does not have a presentation role
- is not hidden from a screen reader
- is interactive
has a click event but not a keyboard equivalent. If you have a `a` element that is a button

### `@angular-eslint/template/interactive-supports-focus`
Elements that have click events should be focusable. 
