var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/Layout.js',
  output: { path: __dirname + '/src/', filename: 'app.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
