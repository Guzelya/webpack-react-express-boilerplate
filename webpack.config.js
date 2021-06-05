const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  //   output: {
  //     path: __dirname + "./dist",
  //     filename: "index_bundle.js",
  //   },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(css)$/, use: ["style-loader", "css-loader"] },
    ],
  },
  //   devServer: {
  //     inline: true,
  //     port: 8008,
  //   },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
