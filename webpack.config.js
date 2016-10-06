const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ForkCheckerPlugin} = require('awesome-typescript-loader');


module.exports = function (env = {}) {
  const loaders = {
    common: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: [
          path.resolve(__dirname, './src/index.html')
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ],
    development: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        query: {
          useForkChecker: true
        }
      }
    ],
    production: [

    ]
  };

  const plugins = {
    common: [
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.CommonsChunkPlugin({
        minChunks: Infinity,
        name: 'inline',
        filename: 'inline.js',
        sourceMapFilename: 'inline.map'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new webpack.DefinePlugin({
        PROD: env.prod ? 'true' : 'false'
      })
    ],
    development: [
      new ForkCheckerPlugin(),
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.resolve(__dirname, 'src')
      )
    ],
    production: [

    ]
  };

  return {
    entry: {
      main: env.prod ? './src/index.aot.ts' : './src/index.ts'
    },
    devtool: env.prod ? 'source-map' : 'eval',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
      pathinfo: !env.prod
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
        'node_modules',
        path.resolve(__dirname, 'src')
      ]
    },
    module: {
      rules: loaders.common.concat(env.prod ? loaders.production : loaders.development)
    },
    plugins: plugins.common.concat(env.prod ? plugins.production : plugins.development),
    node: {
      global: true,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}