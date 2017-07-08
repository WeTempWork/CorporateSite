const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      { test: /\.(eot|woff2?|ttf)$/, loader: 'file-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};
