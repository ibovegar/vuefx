module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'import/no-webpack-loader-syntax': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
