const path = require('path')

module.exports = {
  plugins: {
    'postcss-mixins': {
      mixinsDir: path.resolve(__dirname, './src/styles/mixins')
    },
    'postcss-easings': {},
    'postcss-nested': {},
    'postcss-reporter': {}
  }
}
