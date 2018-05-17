// 引入express框架
const express = require('express');
// 引入express路由
const router = express.Router();
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
const history =require ('connect-history-api-fallback');


// 环境变量
const ENV_STATUS = process.env.ENV_STATUS || 'dev';
const ENV_PORT = process.env.ENV_PORT || '4000';


// webpack相关
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../build/webpack.dev.conf');
const compiler = webpack(config);

// 实例化应用
const app = express();

if ( ENV_STATUS == 'dev' ){
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(history());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(path.join(__dirname, 'views')));
app.get('/', function (req, res) {
  if (ENV_STATUS == 'dev' ){
    res.sendFile('./views/index-tpl.html');
  }else{
    res.sendFile('./views/index.html');
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

// 启动服务器
app.listen(ENV_PORT, () => {
  console.info(`服务已经启动，监听端口${ENV_PORT}`);
});

module.exports = app;
