var express = require('express');
var app = express();
var httperrors = require('http-errors');
var router = require('./routes/index');
var http = require('http');

var port = 3001;
app.use('/', router);

app.use(function(req, res, next) {
    next(httperrors(404));
  });

app.set('port',port)

var server = http.createServer(app);

server.listen(port);