/*
 * @Author: Nundy
 * @Date: 2018-05-19 08:26:53
 * @Last Modified by: 我不是，我没有，别瞎说~ 这个Bug不是我写的
 * @Last Modified time: 2018-06-12 16:41:49
 */

/****************************************/
require('babel-register')
// 引入express框架
const express = require('express')
// 引入node内置path模块
const path = require('path')

// 记录服务日志
const logger = require('morgan')
// 设置网站logo
const favicon = require('serve-favicon')

// HTTP请求体解析
const bodyParser = require('body-parser')
// 管理cookie(设置、获取、删除),express-session依赖于它
// const cookieParser = require('cookie-parser')
// 处理 enctype = "multipart/form-data" 表单数据
// const multer = require('multer')
// 引入history模块,协助vue路由
const history = require('connect-history-api-fallback')

// 环境变量
const ENV_STATUS = process.env.NODE_ENV

// webpack相关
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackCfg = require('../../build/webpack.dev.conf')
const compiler = webpack(webpackCfg)

// 引入系统路由文件
const routerCfg = require('./router/routers')

// 实例应用
const app = express()

/****************************************/
// 日志记录
app.use(logger('dev'))

// 解析 POST/PUT/PATCH 中的请求体
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// API 路由设置
app.use('/api', routerCfg)

// history模块,协助vue路由
app.use(history())
// 设置网站logo
app.use(favicon(path.join(__dirname, 'favicon.ico')))

// webpackDevMiddleware && webpackHotMiddleware
if (ENV_STATUS === 'development') {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackCfg.output.publicPath,
        stats: { colors: true }
    }))
    app.use(webpackHotMiddleware(compiler))
}

// 设置静态文件路径,prod模式
app.use(express.static(path.join(__dirname, 'views')))

// 启动服务
app.listen(3000, () => console.info(`服务已经启动，监听端口3000`))

module.exports = app
