module.exports = {
  entry: ["@babel/polyfill", "./app/main.js"],
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  devtool: "eval-source-map",
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
};
