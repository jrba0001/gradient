const webpack = require("webpack");

module.exports = {
  entry: "./src/client/app.js",
  resolveLoader: {
    modules: ["node_modules"]
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"]
  },
  output: {
    path: __dirname + "/public/js",
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
