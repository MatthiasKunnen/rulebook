const {rules} = require('@typescript-eslint/eslint-plugin');

const baseConfig = require('../base/index');
const typeScriptConfig = require('./index');

const typeScriptRules = new Set(Object.keys(rules));

const output = {
    baseNotTurnedOff: [],
    tsSpecificRuleUnused: [],
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
            output.tsSpecificRuleUnused.push(rule);
        }
    }
});

console.log(JSON.stringify(output, undefined, 4));

const ignoredTsRuleUnused = new Set([
    'no-array-constructor', // The TS specific rule allows new Array with generics
]);

if (output.tsSpecificRuleUnused.filter(rule => !ignoredTsRuleUnused.has(rule)).length > 0
    || output.baseNotTurnedOff.length > 0) {
    process.exit(1);
}
