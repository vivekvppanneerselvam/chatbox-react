const webpack = require('webpack')

const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs')

module.exports = (env) => {
   console.log('Environment', env.NODE_ENV)
   var config = {
      node: env.NODE_ENV
   }
   return {
      context: __dirname,
      entry: './src/index.js',
      output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js',
         publicPath: '/',
      },
      devServer: {
         historyApiFallback: true,
         compress: true,
         disableHostCheck: true   // That solved it
      },
      module: {
         rules: [
            {
               test: /\.js$/,
               use: ['babel-loader']               
            },
            {
               test: /\.css$/,
               use: ['style-loader', 'css-loader'],
            },
            {
               test: /\.(png|gif|woff|woff2|eot|ttf|svg|jpg|PNG)$/,
               use: 'file-loader'
            }
         ]
      },
      node: {
         fs: 'empty',
      },
      plugins: [
         new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
         }),
         new webpack.DefinePlugin({
            'env.NODE_ENV': config.node
         }),
      ]
   }
};