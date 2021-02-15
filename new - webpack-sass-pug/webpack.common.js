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
    obg: "./src/assets/js/index-obg.js",
  },

  output: {
    filename: "./assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
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
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: "file-loader",
        options: {
          name: "./assets/images/[name].[ext]",
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "./assets/fonts/[name].[ext]",
          },
        }, ],
      },
    ],
  },

  plugins: [
    // new CopyPlugin(copiar),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pug/pages/index.pug",
      chunks: ["app"],
    }),
    // new HtmlWebpackPlugin({
    //   filename: "obrigado-cartao.html",
    //   template: "./src/pug/pages/obrigado-cartao.pug",
    //   chunks: ["app"],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "obrigado-boleto.html",
    //   template: "./src/pug/pages/obrigado-boleto.pug",
    //   chunks: ["obg"],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "termos-de-uso.html",
    //   template: "./src/pug/pages/termos-de-uso.pug",
    //   chunks: ["app"],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: "politica-de-privacidade.html",
    //   template: "./src/pug/pages/politica-de-privacidade.pug",
    //   chunks: ["app"],
    // }),

  ],
};
