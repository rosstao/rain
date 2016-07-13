'use strict';

const express = require('express');
const app = express()
const http = require('http');
const port = 8080;

require('./frameWorkConfig/express')(app);
require('./frameWorkConfig/routes')(app);   //设置访问路由

const server = http.createServer(app);
server.listen(port, ()=> {
    console.log('port ' + port + ' service start')
});
