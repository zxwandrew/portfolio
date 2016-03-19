// var webpack = require("webpack");
var nodeExternals = require('webpack-node-externals');
var path = require('path');
// var fs = require("fs");
// var webpack = require('webpack');
// var fs = require('fs');
// var path = require('path');
// var nodeExternals = require("webpack-node-externals");
// var debug = process.env.NODE_ENV !== "production";
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
// var nodeModules = {};
// fs.readdirSync('node_modules')
//     .filter(function(x) {
//         return ['.bin'].indexOf(x) === -1;
//     })
//     .forEach(function(mod) {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = [
  {
    target: 'node',
    cache: false,
    context: __dirname,
    debug: false,
    devtool: 'source-map',
    entry: [
      './src/server'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.min.js'
    },
    module: {
      loaders: [{
        test: /\.json$/,
        loaders: ['json']
      },{
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract('isomorphic-style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ],
      postLoaders: [{
        test: /\.js$/,
        loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react']
      }],
      noParse: /\.min\.js/
    },
    postcss: function () {
      return [autoprefixer, precss];
    },
    sassLoader: {
      includePaths: [path.join(__dirname, 'scss')]
    },
    plugins: [
      new ExtractTextPlugin('styles.css')
    ],
    externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
    resolve: {
      modulesDirectories: [
        'src',
        'node_modules',
        'web_modules'
      ],
      extensions: [
        '',
        '.json',
        '.js'
      ]
    },
    node: {
      __dirname: true,
      fs: 'empty'
    }
  },
  {
    context: path.join(__dirname, 'src/app'),
    output: { filename: 'out' },
    plugins: [new CopyWebpackPlugin([{
      from: 'views',
      to: 'dist/views'
    },{
      from: 'styles/fonts',
      to: 'dist/fonts'
    }
  ])]
  }
];
