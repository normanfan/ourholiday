'use strict';
var express = require('express');
var timeout = require('connect-timeout');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var todos = require('./routes/todos');
var AV = require('leanengine');
var ejs = require('ejs');

var app = express();

// 设置模板引擎
var swig = require('swig');
app.engine('html', ejs.__express);
app.set('view engine', 'html')
app.use(express.static('public'));

// 设置默认超时时间
app.use(timeout('15s'));

// 加载云函数定义
require('./cloud');
// 加载云引擎中间件
app.use(AV.express());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());


// 页面跳转
app.get('/', function(req, res) {
  res.redirect('/home');
  //  res.render('home');
});

app.get('/home', function(req, res) {
  res.render('home/index');
})

//数据api
app.get('/sendmessage', function(req, res) {

  AV.Cloud.requestSmsCode({
    mobilePhoneNumber: '15851868308',
    name: '我们的假期',
    op: '注册',
    ttl: 10
  }).then(function() {
    //发送成功
    res.json('success');
  }, function(err) {
    //发送失败
  });
});

app.get('/getholiday', function(req, res) {
  var cql = 'select * from Holiday';
  AV.Query.doCloudQuery(cql).then(function(data) {
    // results 即为查询结果，它是一个 AV.Object 数组
    var results = data.results;
    res.json({
      results
    });
  }, function(error) {
    res.json({
      status: 'failed'
    });
  });
});

app.get('/getworkday', function(req, res) {
  var cql = 'select * from workDay';
  AV.Query.doCloudQuery(cql).then(function(data) {
    // results 即为查询结果，它是一个 AV.Object 数组
    var results = data.results;
    res.json({
      results
    });
  }, function(error) {
    res.json({
      status: 'failed'
    });
  });
});

app.use(function(req, res, next) {
  // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
  if (!res.headersSent) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

// error handlers
app.use(function(err, req, res, next) { // jshint ignore:line
  var statusCode = err.status || 500;
  if (statusCode === 500) {
    console.error(err.stack || err);
  }
  if (req.timedout) {
    console.error('请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。', req.originalUrl, err.timeout);
  }
  res.status(statusCode);
  // 默认不输出异常详情
  var error = {}
  if (app.get('env') === 'development') {
    // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
    error = err;
  }
  res.render('error', {
    message: err.message,
    error: error
  });
});

module.exports = app;
