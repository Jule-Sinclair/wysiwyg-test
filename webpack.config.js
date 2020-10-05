const path = require('path');

const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {

  const config = {
    entry: {
      app: ['@babel/polyfill', './src/App.tsx'],
    },
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, 'dist'),
      crossOriginLoading: false,
      publicPath: '/',
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          include: /(fonts|images)\//,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      symlinks: false,
      modules: [path.resolve(__dirname, 'src'), 'node_modules', '../node_modules'],
      alias: {
        app: path.resolve(__dirname, 'src/app/'),
        components: path.resolve(__dirname, 'src/components/'),
      },
    },
    plugins: [
      new HotModuleReplacementPlugin(),
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
          collapseWhitespace: true,
          processConditionalComments: true,
          minifyJS: false,
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
    devServer: {
      compress: true,
      disableHostCheck: true,
      historyApiFallback: true,
      hot: true,
      port: 4200,
    },
  };

  return config;
};