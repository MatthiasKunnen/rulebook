const fs = require('fs');
const path = require('path');

const baseConfig = require('../base/index');
const typeScriptConfig = require('./index');

const typeScriptRulesPath = path.join(
    __dirname,
    'node_modules',
    '@typescript-eslint',
    'eslint-plugin',
    'dist',
    'rules',
);

const typeScriptRules = new Set(fs.readdirSync(typeScriptRulesPath)
    .filter(rule => path.extname(rule) === '.js')
    .map(rule => path.basename(rule, path.extname(rule))));

const output = {
    baseNotTurnedOff: [],
    unused: [],
    unusedButBaseTurnedOff: [],
};

Object.keys(baseConfig.rules).forEach(rule => {
    if (typeScriptRules.has(rule)) {
        const isTurnedOff = typeScriptConfig.rules[rule] === 'off';
        const isUsed = typeScriptConfig.rules[`@typescript-eslint/${rule}`] !== undefined;

        if (isUsed && !isTurnedOff) {
            output.baseNotTurnedOff.push(rule);
        } else if (isTurnedOff && !isUsed) {
            output.unusedButBaseTurnedOff.push(rule);
        } else if (!isUsed) {
            output.unused.push(rule);
        }
    }
});

console.log(JSON.stringify(output, undefined, 4));

const ignoredTsRuleUnused = new Set([
    'no-array-constructor', // The TS specific rule allows new Array with generics
]);

if (output.unused.filter(rule => !ignoredTsRuleUnused.has(rule)).length > 0
    || output.baseNotTurnedOff.length > 0) {
    process.exit(1);
}
