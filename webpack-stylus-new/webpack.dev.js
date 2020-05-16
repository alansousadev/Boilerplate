const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./dist",
    port: 3000,
    compress: true,
    open: true
    // ,
    // hot: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles.css",
    })
  ],

  module: {
    rules: [{
      test: /\.(png|svg|jpg|gif)$/,
      loader: "file-loader",
      options: {
        limit: 8192,
        name: "[name].[ext]",
        outputPath: "./assets/img/",
        publicPath: "./assets/img/"
      },
    },
  ],
  },

})
