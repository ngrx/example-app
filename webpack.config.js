const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ForkCheckerPlugin} = require('awesome-typescript-loader');
const {NgcWebpackPlugin} = require('@ngtools/webpack');


module.exports = function (env = {}) {
  const loaders = {
    common: [
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
      { test: /\.ts$/, loader: '@ngtools/webpack', exclude: [/\.(spec|e2e)\.ts$/] }
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
      new NgcWebpackPlugin({
        project: path.resolve(__dirname, 'tsconfig.json'),
        baseDir: __dirname,
        entryModule: path.resolve(__dirname, 'src/app/app.module#AppModule'),
        genDir: path.join(__dirname, 'out', 'ngfactory')
      })
    ]
  };

  return {
    entry: {
      main: './src/index.ts'
    },
    devtool: env.prod ? 'source-map' : 'eval',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
      pathinfo: !env.prod
    },
    resolve: {
      extensions: ['.ts', '.js']
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