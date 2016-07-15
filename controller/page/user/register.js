/**
 * Created by xuyx on 2016/7/15.
 */
'use strict';

const wrap = require('co-express');
const userService = require('../../../service/user');

/**
 * 登录页面
 * @param req
 * @param res
 * @param next
 */
exports.registerPage = wrap((req, res, next)=> {
    res.render('register', {title: 'User Register'});
})

/**
 * 注册
 * @param req
 * @param res
 * @param next
 */
exports.register = wrap((req, res, next)=> {
    let name = req.body.uname;  //用户名
    let password = req.body.upwd;   //密码
    let user = {
        name: name,
        password: password
    }
    userService.register(user).then((result)=> {
        res.send(result);
    });
})