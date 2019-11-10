"use strict";

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");
const path = require("path");

const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: "[name]__[local]___[hash:base64:5]"
    },
    importLoaders: 2,
    sourceMap: false
  }
};

module.exports = {
  mode: "development",
  entry: "./src/main",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./public/dist"),
    publicPath: "/public/assets/"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", CSSModuleLoader]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"]
  },

  devtool: "source-map",
  context: __dirname,
  target: "web",
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  stats: "errors-only",

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  stats: {
    colors: true,
    errors: true,
    errorDetails: true
  }
};
