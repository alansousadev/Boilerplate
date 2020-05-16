const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  plugins: [
    new PurgecssPlugin({
      paths: glob.sync(path.join(__dirname, "dist/**.html")),
    }),
    new TerserPlugin(),
    new OptimizeCSSAssetsPlugin(),

    new MiniCssExtractPlugin({
      filename: "./assets/css/styles.css",
    })
  ],

  module: {
    rules: [{
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          limit: 8192,
          name: "[name].[ext]",
          outputPath: "assets/img/",
          publicPath: "../assets/../img/"
        },
    },
  ],
  },

});
