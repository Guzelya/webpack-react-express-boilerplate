const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const browserPlugin = require("webpack-browser-plugin");
// const chromeUserDataDir = "your/path/here";
// require("dotenv").config();

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
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
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     "file-loader",
      //     {
      //       loader: "image-webpack-loader",
      //       options: {
      //         bypassOnDebug: true, // webpack@1.x
      //         disable: true, // webpack@2.x and newer
      //       },
      //     },
      //   ],
      // },
    ],
  },
  //   devServer: {
  //     inline: true,
  //     port: 8008,
  //   },
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    watchContentBase: true,
    // hot: true,
    // hot: true,
    // inline: true,
    // host: "localhost",
    // port: 3002,
    // contentBase: "./dist",
    watchOptions: {
      poll: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    // headers: {
    //   "Access-Control-Allow-Origin": "http://localhost:3002",
    // },
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3002",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
    // proxy: {
    //   "/api": {
    //     changeOrigin: true,
    //     cookieDomainRewrite: "localhost",
    //     target: api,
    //     onProxyReq: (proxyReq) => {
    //       if (proxyReq.getHeader("origin")) {
    //         proxyReq.setHeader("origin", api);
    //       }
    //     },
    //   },
    // },
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //   "Access-Control-Allow-Headers":
    //     "X-Requested-With, content-type, Authorization",
    // },
  },
  // headers: {
  //   "Access-Control-Allow-Origin": "http://localhost:3002",
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new Dotenv({
      path: "./.env",
    }),
    // new browserPlugin({
    //   openOptions: {
    //     app: [
    //       "chrome",
    //       //'--incognito',
    //       "--disable-web-security", // to enable CORS
    //       // "--user-data-dir=" + path.resolve(chromeUserDataDir), // to let Chrome create and store here developers plugins, settings, etc.
    //     ],
    //   },
    // }),
  ],
};
