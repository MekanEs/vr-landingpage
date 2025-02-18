
const { FlatCompat } = require('@eslint/eslintrc');
const typeScriptEsLintPlugin = require('@typescript-eslint/eslint-plugin');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: typeScriptEsLintPlugin.configs['recommended'],
});
module.exports = [
  ...compat.config({
  "root": true,
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "rules": {
    "eslint-plugin-vue/multi-word-component-names": "off",
    "comma-dangle": "off"
  }
})
];
