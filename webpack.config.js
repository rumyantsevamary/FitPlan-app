'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    entry: "./src/main",

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, './public/dist'),
        publicPath: "/public/assets/"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(less|css)$/,
                 use: [
                   MiniCssExtractPlugin.loader,
                   'css-loader',
                   'less-loader'
                  ]
              }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: "source-map",
    context: __dirname,
    target: "web",
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    stats: "errors-only",
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[id].css',
          })
    ]
}