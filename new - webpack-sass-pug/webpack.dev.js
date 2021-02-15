const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const LiveReloadPlugin = require('webpack-livereload-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./dist",
    port: 3000,
    compress: true,
    open: true,
    // hot: true
  },

  plugins: [
      // new LiveReloadPlugin({
      //   appendScriptTag: true //carregador para atualizar pug com modulo hot
      // }),
    new MiniCssExtractPlugin({
      filename: "./styles.css",
    }),
    // new BundleAnalyzerPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          // MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
  ],
  },
})
