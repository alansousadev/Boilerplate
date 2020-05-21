const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const copiar = [
  // {from: './src/assets/images/', to: './assets/images'},
  // {from: './src/assets/fonts/', to: './assets/fonts'},
  // {from: './src/favicon.png', to: './'},
// ];

module.exports = {
  entry: {
    app: "./src/assets/js/index.js",
    // obg: "./src/assets/js/pgobg.js",
  },

  output: {
    filename: "./assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // resolve: {
  //   alias: {
  //     images: path.resolve(__dirname, 'src/images'),
  //   }
  // },

  module: {
    rules: [
      // {
      //   test: /\.(styl|css)$/,
      //   // test: /\.s[ac]ss$/,
      //   exclude: /node_modules/,
      //   use: [
      //     "style-loader",
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: "css-loader",
      //       options: { sourceMap: true },
      //     },
      //     { loader: "postcss-loader", options: { sourceMap: true } },
      //     { loader: "stylus-loader", options: { sourceMap: true } },
      //   ],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'html-loader', options: { minimize: false,  }, },
          { loader: 'pug-html-loader', options: { pretty: true,  data: { }, }, },
        ],
      },
    ],
  },

  plugins: [
    // new CopyPlugin(copiar),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: "test pug",
      favicon: "./src/favicon.png",
      filename: "index.html",
      // template: "./src/pug/pages/index.pug",
      template: "./src/pug/index.pug",
      chunks: ["app"],
      // minify: false
      // template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: "index2.html",
      template: "./src/pug/index2.pug",
      chunks: ["app"],
    }),
  ],
};
