/* eslint-disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const dotenv = require("dotenv");

dotenv.config();

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: { browsers: ["IE 10"] }, debug: isDevelopment }],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${path.resolve(__dirname, "../src/public")}/index.html` }),
    new webpack.ProvidePlugin({ React: "react" }),
    new webpack.DefinePlugin({ "process.env": JSON.stringify(process.env) }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      "@api": path.resolve(__dirname, "../src/api/"),
      "@hooks": path.resolve(__dirname, "../src/hooks/"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@layouts": path.resolve(__dirname, "../src/layouts/"),
      "@pages": path.resolve(__dirname, "../src/pages/"),
      "@utils": path.resolve(__dirname, "../src/utils/"),
      "@types": path.resolve(__dirname, "../src/types"),
      "@lib": path.resolve(__dirname, "../src/lib"),
      "@constants": path.resolve(__dirname, "../src/constants"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
