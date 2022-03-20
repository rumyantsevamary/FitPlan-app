const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: [
    './src/bootstrap/main.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,              
              modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]'
            },
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    alias: {
      modules: path.resolve(__dirname, 'src/modules/'),
      components: path.resolve(__dirname, 'src/components/'),
    }
  }
};

module.exports = config;