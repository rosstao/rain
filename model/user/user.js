/**
 * Created by xuyx on 2016/7/14.
 */
(()=>{
    'use strict';

    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    let UserSchema = new Schema({
        name: String,   //用户名
        real_name: String,  //真实姓名
        password: String,   //密码
        age: Number,    //年龄
        birthday: {type: Date}, //生日
        create_at: {type: Date, default: Date.now}  //创建时间
    });

    module.exports = UserSchema;
})()

