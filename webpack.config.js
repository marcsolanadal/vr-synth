const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (mode) => {
  return {
    mode: mode,
    entry: {
      components: "./src/components.js",
      world: "./src/world.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      ],
    },
    plugins: [new CopyPlugin([{ from: "public" }, { from: "vendor" }])],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
    },
  };
};
