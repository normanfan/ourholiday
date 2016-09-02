var path = require('path');
var config = {
  entry: {
    'home/page': './js/common/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  }
}
module.exports = config;
