var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [ 'babel-polyfill', './app/index.js' ]
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'dist'),
    publicPath: ''
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      '__DEVTOOLS__': false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      filename: 'index.html',
      template: path.join(__dirname, 'assets', 'index.template.html'),
      favicon: path.join(__dirname, 'assets', 'images/favicon.ico'),
    })
  ],
  resolve: {
    extensions: ['', '.css', '.es', '.es6', '.js', '.jsx', '.less', '.sass', '.scss'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'app') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader') },
    ]
  },
  cssnext: {
    browsers: ['last 2 versions']
  }
};