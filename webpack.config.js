var path = require('path'),
  fs = require('fs')

module.exports = {
  entry: {
    'bundle': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'app'),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.tag\.html?$/,
        loader: 'tag-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          type: 'babel'
        }
      }
    ]
  },
  resolve: {
      root: path.resolve('./src'),
  }
}
