'use strict';
var express = require('express');
var timeout = require('connect-timeout');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var todos = require('./routes/todos');
var AV = require('leanengine');
var ejs = require('ejs');
//初始化
var APP_ID = 'Sgr7sTJPjh8bblpRhAxnrQyC-gzGzoHsz';
var APP_KEY = 'LWztj7YEEx9Oj39bKyO8J8CW';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var WorkDate = AV.Object.extend('workDate');
var HoliDayDate = AV.Object.extend('holidayDate');
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

app.get('/view/demo', function(req, res) {
  res.render('demo/index');
})

app.get('/holiday', function(req, res) {
  res.render('holiday/index');
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
//保存
app.post('/holiday/modify', function(req, res) {
  var classObj = req.body.classObj;
  var query = new AV.Query(classObj);
  query.equalTo('Date', Number(req.body.date));
  query.find().then(function(result) {
    if (result.length > 0) {
      res.json({
        message: "has saved"
      })
    } else {
      var workDate = '';
      if (classObj == "workDate") {
        workDate = new WorkDate();
      } else {
        workDate = new HoliDayDate();
      }
      workDate.set({
        'Date': Number(req.body.date),
      });
      workDate.save().then(function(result) {
        res.json({
          status: "success"
        })
      }, function(error) {
        res.json({
          status: "failed"
        })
      })
    }
  }, function(error) {

  })


});

app.get('/holiday/getcount')


app.get('/holiday/getworkday', function(req, res) {
  var classObj = req.query.classObj;
  var fromDate = Number(req.query.fromDate),
    endDate = Number(req.query.endDate);
  var queryLess = new AV.Query(classObj),
    queryGreater = new AV.Query(classObj);
  queryLess.lessThanOrEqualTo('Date', endDate);
  queryGreater.greaterThanOrEqualTo('Date', fromDate);
  var query = AV.Query.and(queryLess, queryGreater);
  query.find().then(function(result) {
    res.json(result);
  }, function(error) {
    res.json({
      status: 'failed',
      message: error
    })
  })
});

app.post('/holiday/delete', function(req, res) {
  var classObj = req.body.classObj;
  var dateList = JSON.parse(req.body.dateList),
    avObjectArray = [];
  // var cql = 'delete * from workDate where objectId in (' + dateList.join() + ')';
  // AV.Query.doCloudQuery('delete from workDate where objectId="57d7a79c128fe1005538883e"').then(function (data) {
  //   res.json({
  //     status:'success'
  //   })
  //  }, function (error) {
  //    res.json({
  //      status:'failed',
  //      error
  //    })
  //  });
  // AV.Query.doCloudQuery(cql).then(function(data) {
  //   res.json({
  //     status: 'success'
  //   });
  // }, function(error) {
  //   res.json({
  //     status: 'failed',
  //     msg: error;
  //   });
  // })

  dateList.forEach(elem => {
    var workDate = new WorkDate();
    var dateObj = AV.Object.createWithoutData(classObj, elem);
    avObjectArray.push(dateObj);
  });
  AV.Object.destroyAll(avObjectArray).then(function(avobjs) {
    res.json({
      status: 'success'
    });
  }, function(error) {
    res.json({
      status: 'failed',
      message: error,
    });
  });

});


app.get('/getholiday', function(req, res) {
  var cql = 'select * from Holiday ';
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

app.get('/holiday/remain', function(req, res) {
  var workdays = new AV.Query('workDate');
  workdays.count().then(function(workDaysCount) {
    var holidays = new AV.Query('holidayDate');
    holidays.count().then(function(holidayCount) {
      res.json({
        status: 'success',
        workDayCount:workDaysCount,
        holidayCount:holidayCount
      });
    }, function(error) {
      res.json({
        status: 'failed'
      });
    });
  }, function(error) {
    res.json({
      status: 'failed'
    });
  });
})

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
