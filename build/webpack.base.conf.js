const path = require('path')
const config = require('./config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const utils = {
    resolve: (dir) => {
        return path.join(__dirname, '..', dir)
    },
    assetsPath: (_path) => {
        return path.posix.join(config.dev.assetsSubDirectory, _path)
    }
}

module.exports = {
    entry: {
        app: './src/client/index.js'
    },
    resolve: {
    // 自动解析扩展
        extensions: ['.js', '.vue', '.json'],
        // 解析别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': utils.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: utils.resolve('src')
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
