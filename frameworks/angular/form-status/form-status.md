# Form status

## General
Be careful when using _valid_ when checking the form status as the form status
can also be _pending_ or _disabled_. To check the form status before proceeding
with a submission, check whether `!invalid`.


## Workaround
Angular forms can sometimes be stuck pending as described in
https://github.com/angular/angular/issues/13200 and
https://github.com/angular/angular/issues/14542.

To combat this, utilize the library here:
https://www.npmjs.com/package/angular-form-status-workaround.
