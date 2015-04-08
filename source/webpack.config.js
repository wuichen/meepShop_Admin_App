var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/client/main.js'
  ],
  output: {
    path: path.join(__dirname, '../www/build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.jsx?$/,
      loaders: ['babel-loader?experimental&optional=runtime'],
      exclude: /node_modules/
    }, {
      test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }, {
      test: /\.png$/i,
      loaders: ['url-loader?limit=10000&mimetype=image/png']
    }, {
      test: /\.gif$/i,
      loaders: ['url-loader?limit=10000&mimetype=image/gif']
    }, {
      test: /\.jpe?g$/i,
      loaders: ['url-loader?limit=10000&mimetype=image/jpg']
    }]
  }
};
