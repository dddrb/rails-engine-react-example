var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '../../../app/assets/',
    publicPath: '/static/',
    filename: 'javascripts/rails_engine_react_example/application.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('stylesheets/rails_engine_react_example/application.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?module!cssnext-loader') }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
