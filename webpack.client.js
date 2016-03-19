var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  target: 'web',
  cache: false,
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: ['./src/client.js'],
  module: {
    loaders: [{
      test: /\.json$/,
      loaders: ['json']
    },
    { test: /\.scss$/, loader: "style!css!sass" },
    { test: /\.css$/, loader: "style!css" },
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
      loaders: ['babel?presets[]=es2015&presets[]=stage-0&presets[]=react'],
      exclude: /node_modules/
    }],
    noParse: /\.min\.js/
  },
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
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  ]
};
