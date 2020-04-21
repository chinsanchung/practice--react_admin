const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const MODE = process.env.WEBPACK_ENV;

module.exports = {
  entry: "./components/index.js",
  mode: "development",
  devtool: "#sourcemap",
  stats: {
    colors: true,
    reasons: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
  node: {
    fs: "empty",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/",
  },
};
