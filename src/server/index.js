/* 引入中间件 */

// 引入express框架
let express = require('express');
// 引入express路由
let router = express.Router();
// 引入内置的path模块
let path = require('path');
// 管理cookie(设置、获取、删除),express-session依赖于它
let cookieParser = require('cookie-parser');
// 创建http错误信息
let createError = require('http-errors');
// 记录服务日志
let logger = require('morgan');
// 借用ejs来设置html为模板引擎
let ejs = require('ejs');
// 设置网站logo
let favicon = require('serve-favicon');
// HTTP请求体解析
let bodyParser = require ('body-parser');
// 引入history模块,协助vue路由
let history =require ('connect-history-api-fallback');
// webpack
let webpack = require('webpack');

// webpack相关
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
// import config from '../../build/webpack.dev.conf'

const app = express()

app.use(history())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// webpack
// const compiler = webpack(config)
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   stats: { colors: true }
// }))
// app.use(webpackHotMiddleware(compiler))


app.use(express.static(path.join(__dirname, 'views')))
app.get('/', function (req, res) {
  res.sendFile('./views/index.html')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
})

// 设置监听端口
const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => {
  console.info(`服务已经启动，监听端口${SERVER_PORT}`)
})

module.exports = app
