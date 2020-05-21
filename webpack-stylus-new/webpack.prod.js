const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = merge(common, {
  mode: "production",
  // devtool: false,

  output: {
    filename: "./assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(styl|css)$/,
        // test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          {
            loader: "css-loader",
            options: {  },
          },
          "postcss-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./assets/images/",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]",
              outputPath: "assets/fonts/",
              publicPath: "../assets/../fonts/",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new PurgecssPlugin({
      paths: glob.sync(path.join(__dirname, "dist/**.html")),
    }),
    new TerserPlugin(),
    new OptimizeCSSAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "./assets/css/styles.css",
    }),
    new ImageminPlugin({
      pngquant: {
        quality: "95-100",
      },
    }),
  ],
});
