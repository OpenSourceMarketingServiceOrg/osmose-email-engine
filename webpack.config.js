const path = require('path');

module.exports = {
  entry: './src/osmose.ee.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'library',
    libraryTarget: "umd"
  },
  module: {
    rules:[
      {
        test:/\.jsx?$/,
        loader: "babel-loader",
      }
    ]
  },
  context: __dirname,
  target: "node"
}
