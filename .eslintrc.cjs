/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue', '*.js'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-async-promise-executor': 'off',
    'vue/valid-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/camelcase': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    'prefer-regex-literals': 'off'
  },
  plugins: ['prettier']
}
