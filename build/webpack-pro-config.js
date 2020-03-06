const webpack                = require('webpack');
const path                   = require('path');
const miniCssExtractPlugin   = require('mini-css-extract-plugin');
const htmlWebpackPlugin      = require('html-webpack-plugin');
const vueLoaderPlugin        = require('vue-loader/lib/plugin');
const copyWebpackPlugin      = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    path: path.join(__dirname, '../src/main.js')
  },
  output: {
    filename: 'js/bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
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
        test: /\.scss$/,
        exclude: /node-modules/,
        use: [
          {
            loader: miniCssExtractPlugin.loader
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
              name:'font/[name].[hash:8].[ext]'
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
            name:'font/[name].[hash:8].[ext]'
          }
        }]
      },
    ],
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
      filename: 'css/[name].css'
    }),
    new CleanWebpackPlugin(),
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static/headhunter.png'),
        to: path.resolve(__dirname, './dist/font')
      }
    ])
  ]
};

module.exports = config;