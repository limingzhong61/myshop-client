module.exports = {
    // devServer: {
    //     proxy: 'http://localhost:4000'
    // }
    assetsDir: './',
    publicPath: './',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          ws: true,
          changeOrigin: true
        },
        '/foo': {
          target: '<other_url>'
        }
      }
    }
}