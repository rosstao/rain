'use strict';

const express = require('express');
const app = express()
const http = require('http');
const session = require('express-session');

const port = 8080;

let i = 0;

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use('/', (req, res) => {
  console.log(req.session, '--', i++);
  res.send('hello');
});

const server = http.createServer(app);
server.listen(port);
