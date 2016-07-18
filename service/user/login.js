/**
 * Created by xuyx on 2016/7/15.
 */
(()=>{

    'use strict';

    const User = require('../../model').User.User;
    const logger = require('../../helper/logger');
    const result = require('../../helper/result');

    /**
     * 用户登录
     * @param user 登录用户数据
     * @param req
     * @returns {*|Promise|Promise.<T>}
     */
    module.exports = (user, req)=> {
        return User.findOne(user).then((data)=> {
            if (data) {
                req.session.user = data;
                return result(0, 'login successful');
            } else {
                return result(-1, 'login failed')
            }
        }).catch((error)=> {
            logger.error(error.message);
        })
    }
})()
