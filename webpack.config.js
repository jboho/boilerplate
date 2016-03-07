var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      '__DEVTOOLS__': process.env.DEVTOOLS === 'true' ? true : false
    }),
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      filename: 'index.html',
      template: path.join(__dirname, 'assets', 'index.template.html'),
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
  ],
  resolve: {
    extensions: ['', '.css', '.es', '.es6', '.js', '.jsx', '.less', '.sass', '.scss'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'app') },
      { test: /\.less$/, loader: 'style-loader!css-loader!postcss-loader!less-loader' },
    ]
  },
  cssnext: {
    browsers: ['last 2 versions']
  }
};