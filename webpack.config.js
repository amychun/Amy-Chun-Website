module.exports = {
  entry: ["@babel/polyfill", "./app/main.js"],
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
  // optimization: {
  //   runtimeChunk: "single",
  // },
};
