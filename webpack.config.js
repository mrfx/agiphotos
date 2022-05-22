const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'agiphotos.bundle.js',
    path: path.resolve(__dirname, 'dist-demo'),
  },
};
