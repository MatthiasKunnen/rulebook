# npm

## Execute binaries in local node_modules
Using npm you cannot simply execute binaries in your local `node_modules`. Installing all these
packages and their binaries globally can cause version discrepancies. To solve this add the
following function to your shell.

```bash
function npm-exec {
    $(npm bin)/$@
}
```

You can now execute local scripts as follows:

- `npm-exec tsc`
- `npm-exec ng serve`
- `npm-exec ng g c Example`
