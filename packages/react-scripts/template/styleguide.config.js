if(process.env.NODE_ENV === 'production') {
  module.exports = {
    webpackConfig: require('./node_modules/@raumobil/react-scripts/config/webpack.config.prod.js'),
    ignore: ['**/components/index.js']
  }
} else {
  module.exports = {
    webpackConfig: require('./node_modules/@raumobil/react-scripts/config/webpack.config.dev.js'),
    ignore: ['**/components/index.js']
  }
}

