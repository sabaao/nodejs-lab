// file: server.js
var log4js = require('log4js');
var express = require('express');

log4js.configure({
    appenders: { 
        console: { type: 'console' }
        ,app: { type: 'file', filename: 'application.log' }
    },
    categories: { default: { appenders: [ 'console','app' ], level: 'info' } }
  });

var app = express();
app.use(log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }));
app.get('/', function(req,res) {
 res.send('前端外刊評論');
});
app.listen(5000);