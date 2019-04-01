const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/components');
const DIST_DIR = path.join(__dirname, '/public');
module.exports = {
  entry: `${SRC_DIR}/AlbumsList.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
    ],
  },
};
