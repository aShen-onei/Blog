const proxy                = require('../config/proxy');
const webpack              = require('webpack');
const path                 = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin    = require('html-webpack-plugin');
const vueLoaderPlugin      = require('vue-loader/lib/plugin');
const copyWebpackPlugin    = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    path: path.join(__dirname, '../src/main.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: '#cheap-module-eval-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    port:8080,
    overlay:{
      errors:true
    },
    proxy: proxy,
    open:true,
    hot:true,
    stats:{
      all:false,
      assets:true,
      assetsSort:"field",
      builtAt:true,
      errors:true,
      warnings:true
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node-modules/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node-modules/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.less$/,
        exclude: /node-modules/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node-modules/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test:/\.(gif|jpg|jpeg|png|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:10000,
              name:'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test:/\.((woff2?|eot|ttf|otf)(\?.*)?$)/,
        use:[{
          loader:'url-loader',
          options:{
            limit:10000,
            name:'static/[name].[hash:8].[ext]'
          }
        }]
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './static/index.html',
      inject: true
    }),
    new vueLoaderPlugin(),
    new miniCssExtractPlugin({
      filename: '[name].css',
    }),
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, './dist/static')
      }
    ])
  ]
};

module.exports = config;