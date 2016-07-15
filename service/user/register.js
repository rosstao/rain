/**
 * Created by xuyx on 2016/7/15.
 */
'use strict';

const User = require('../../model').User.User;
const logger = require('../../helper/logger');
const result = require('../../helper/result');

/**
 * 保存注册数据
 * @param user
 * @returns {*|Promise|Promise.<T>}
 */
const saveUser = (user)=> {
    return User.create(user).then((data)=> {
        return result(0, '注册成功！')
    }).catch((error)=> {
        logger.error(error.message);
    })
}

/**
 * 用户注册
 * @param user  //注册数据
 * @returns {*|Promise|Promise.<T>}
 */
module.exports = (user)=> {
    return User.findOne({name: user.name}).then((data)=> {
        if (data) {
            return result(-1, '用户名已存在');
        } else {
            return saveUser(user);
        }
    }).catch((error)=> {
        logger.error(error.message);
    })
}