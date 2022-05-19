import path from "path";
import webpack, { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const prodMode = process.env.NODE_ENV === "production";
const devMode = process.env.NODE_ENV === "development";

const config: Configuration = {
  name: "my-own-dictionary",
  mode: prodMode ? "production" : "development",
  devtool: prodMode ? "hidden-source-map" : "eval",
  entry: { app: "./src/index.tsx" },
  resolve: {
    extensions: [".jsx", ".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          fallback: "file-loader",
          name: "[name].[ext]?[hash]",
          pudlicPath: "./dist/",
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: { browsers: ["IE 10"] }, debug: devMode }],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              exclude: path.join(__dirname, "node_modules"),
            },
          },
          { loader: "ts-loader" },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    static: { directory: path.resolve(__dirname) },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: prodMode ? "production" : "development",
    }),
    new webpack.ProvidePlugin({ React: "react" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: prodMode ? { collapseWhitespace: true, removeComments: true } : false,
      hash: true,
    }),
  ],
};

if (devMode && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  new ReactRefreshWebpackPlugin({ overlay: { useURLPolyfill: true } });
}

if (prodMode && config.plugins) {
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
}

export default config;