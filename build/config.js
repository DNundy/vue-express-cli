var path = require('path')
module.exports = {
    build: {
        index: path.resolve(__dirname, '../src/server/views/index.html'),
        assetsRoot: path.resolve(__dirname, '../src/server/views/'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        cssSourceMap: false
    }
}
