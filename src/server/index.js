/*
 * @Author: Nundyaa 
 * @Date: 2018-05-18 17:02:50 
 * @Last Modified by: 我不是，我没有，别瞎说~ 这个Bug不是我写的
 * @Last Modified time: 2018-05-18 17:53:37
 */

 /****************************************/
// 引入express框架
const express = require('express');
// 引入node内置path模块
const path = require('path');
// 管理cookie(设置、获取、删除),express-session依赖于它
const cookieParser = require('cookie-parser');
// 用于创建http错误信息
const createError = require('http-errors');
// 记录服务日志
const logger = require('morgan');
// 借用ejs来设置html为模板引擎
const ejs = require('ejs');
// 设置网站logo
const favicon = require('serve-favicon');
// HTTP请求体解析
const bodyParser = require ('body-parser');
// 引入history模块,协助vue路由
// const history =require ('connect-history-api-fallback');

// 环境变量
const ENV_STATUS = process.env.ENV_STATUS || 'dev';
const ENV_PORT = process.env.ENV_PORT || '4000';

// webpack相关
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../build/webpack.dev.conf');
const compiler = webpack(config);

// 引入系统路由文件
const router = require('./router');

// 实例应用
const app = express();

/****************************************/
// 常规中间件
// app.use(history());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// API 路由设置
app.use('/api', router);

// webpackDevMiddleware
if ( ENV_STATUS == 'dev' ){
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }));
  app.use(webpackHotMiddleware(compiler));
}

// 捕捉404并next错误回调
app.use(function (req, res, next) {
  next(createError(404));
});

// 错误回调
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

// 启动服务
app.listen(ENV_PORT, () => {
  console.info(`服务已经启动，监听端口${ENV_PORT}`);
});

module.exports = app;
