const path = require('path')

module.exports = {
  plugins: {
    'postcss-mixins': {
      mixinsDir: path.resolve(__dirname, './src/styles/mixins')
    },
    'postcss-functions': {
      glob: path.join(__dirname, './src/styles/functions', '*.js')
    },
    'postcss-nested': {},
    'postcss-reporter': {}
  }
}
