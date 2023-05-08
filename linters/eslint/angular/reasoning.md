# Reasoning
Explains the reasoning behind certain decisions.

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
