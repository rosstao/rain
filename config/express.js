/**
 * Created by xuyx on 2016/7/12.
 */
(()=> {
    'use strict';

    const logger = require('morgan');  //服务器接收请求信息
    const bodyParser = require('body-parser');
    const cookieParser = require('cookie-parser');
    const session = require('express-session');
    const express = require('express');
    const path = require('path');

    module.exports = (app)=> {
        app.set('views', path.join(__dirname, '../views'));   //设置页面模板路径
        //app.set('view engine', 'pug');  //设置模板引擎
        app.set('view engine', 'ejs');
        app.use(logger('combined'));


        app.use(bodyParser.json()); //解析request请求
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(cookieParser('keyboard cat'));  //session 依赖 cookie  cookieParser必须在use session之前
        app.use(express.static('public'));

        app.use(session({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true
        }));
    }
})()