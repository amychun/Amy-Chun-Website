var path = require('path')

module.exports = {
  entry: ["@babel/polyfill", "./app/main.js"],
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
    // path: path.resolve(__dirname, 'public/'),
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
};
