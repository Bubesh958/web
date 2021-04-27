const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ROOT_DIRECTORY = __dirname;
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, "src");

const config = {
  entry: [path.resolve(__dirname, "./src/index.js")],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "production",
  resolve: {
    modules: [path.resolve("node_modules"), "node_modules"],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIRECTORY, "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(SRC_DIRECTORY, "assets"),
          to: path.join(ROOT_DIRECTORY, "build/assets"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.htm$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ["file-loader"],
      },
    ],
  },
};

module.exports = config;
