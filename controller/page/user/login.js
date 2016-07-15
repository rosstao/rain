/**
 * Created by xuyx on 2016/7/15.
 */
'use strict';

const wrap = require('co-express');
const userService = require('../../../service/user');

exports.loginPage = wrap((req, res, next)=> {
    res.render("login", {title: 'User Login'});
})

/**
 * 登录
 * @param req
 * @param res
 * @param next
 */
exports.login = wrap((req, res, next)=> {
    let name = req.body.uname;   //用户名
    let password = req.body.upwd;   //密码
    let user = {
        name: name,
        password: password
    }
    userService.login(user, req).then((result)=> {
        res.send(result);
        return res.end();
    })
});