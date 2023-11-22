const prod = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = (env)=> {
    return {
      mode: prod ? "production" : "development",
      entry: "./index.tsx",
      output: {
        path: path.resolve(__dirname, "dist"),
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx|js)$/,
            exclude: /node_modules/,
            resolve: {
              extensions: [".ts", ".tsx", ".js", ".json"],
            },
            use: "ts-loader",
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
        ],
      },
      devtool: prod ? undefined : "source-map",
      plugins: [
        new HtmlWebpackPlugin({
          template: "index.html",
        }),
        new MiniCssExtractPlugin(),
        new dotenv({
          path: `./.env.${process.env.NODE_ENV}`,
        })
      ],
      devServer: {
        historyApiFallback: true
      }
    };
};