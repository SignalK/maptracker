var webpack = require('webpack')

module.exports = {
  entry: {
    map: './map.js'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: 'json'}
    ]
  },
  plugins: [
  ],
  externals: ["mdns", "ws"]}
