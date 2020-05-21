const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const LiveReloadPlugin = require('webpack-livereload-plugin')

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
  //     new LiveReloadPlugin({
  //       appendScriptTag: true //carregador para atualizar pug com modulo hot
  //     }),
    new MiniCssExtractPlugin({
      filename: "./styles.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        // test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "stylus-loader", options: { sourceMap: true } },
        ],
      },
      {
      test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "./assets/images/",
        publicPath: "./assets/images/"
      },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "file-loader",
          options: {
            limit: 8192,
            name: "[name].[ext]",
            outputPath: "./assets/fonts/",
            publicPath: "./assets/fonts/"
          },
        }, ],
      },
  ],
  },

})
