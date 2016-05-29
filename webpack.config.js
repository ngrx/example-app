var path = require('path');
var _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  entry: {
    vendor: './src/vendors.ts',
    main: './src/main.browser.ts'
  },
  output: {
  	path: 'dist/',
  	filename: '[name].bundle.js',
  	sourceMapFilename: '[name].map',
  	chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: root('src'),
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [root('src/index.html')]
      }
    ]
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}
