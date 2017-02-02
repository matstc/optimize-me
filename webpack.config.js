var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  devtool: 'inline-sourcemap',
  context: __dirname,
  entry: ["./app.js"], //, "./second.css"],
  output: {
    path: "./public",
    publicPath: '/public',
    filename: "bundle.js"
  },
  module: {
    rules: [
      /*
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
      },
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  /*
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new ExtractTextPlugin("second.css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
  ]
  */
};
