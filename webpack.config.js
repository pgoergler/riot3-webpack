var webpack = require('webpack');
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
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({ riot: 'riot' })
  ],
  module: {
    loaders: [
      { test: /\.tag\.html$/, exclude: /node_modules/, loader: 'tag-loader'},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          "presets": ["es2015-riot"]
        }
      }
    ]
  },
  resolve: {
      root: path.resolve('./src'),
  }
}
