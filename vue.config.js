const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'docs/main.js',
      template: 'src/public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs')
  },
  configureWebpack: {
    resolve: {
      alias: {
        'docs': path.resolve(__dirname, 'docs/')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        publicPath: process.env.NODE_ENV === 'production' ? './' : ''
      }))
  }
}
