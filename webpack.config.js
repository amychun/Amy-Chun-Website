module.exports = {
  entry: ["@babel/polyfill", "./app/main.js"],
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  target: "web",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};

// const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: "./client/app.js",
//   output: {
//     path: path.resolve(__dirname, "public"),
//     filename: "bundle.js",
//   },
// };
