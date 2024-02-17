module.exports = {
  mode: "development",
  entry: ["./app/main.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  context: __dirname,
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: __dirname + "/public",
    },
  },
  module: {
    rules: [
      {
        test: /.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/,
        loader: "url-loader",
      },
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        // options: {
        //   presets: ["@babel/preset-env", "@babel/preset-react"],
        // },
      },
    ],
  },
};
