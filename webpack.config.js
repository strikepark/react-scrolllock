const path = require('path')

module.exports = {
  entry: './src/ScrollLock.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ScrollLock.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
}
