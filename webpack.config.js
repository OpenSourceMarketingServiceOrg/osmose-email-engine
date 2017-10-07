const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Osmose',
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
  target: "node",
  node: {
    console: true,
    global: true,
    process: true,
    __filename: "mock",
    __dirname: "mock",
    Buffer: true,
    setImmediate: true
  }
}
