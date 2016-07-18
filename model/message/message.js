/**
 * Created by hetao on 2016/7/18.
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
    title: String,   //名称
    content: String,  //内容
    type: String,   //类型 1. timer, 2. push, 3. trigger
    create_at: {type: Date, default: Date.now},  //创建日期
    update_at: {type: Date, default: Date.now}  //更新时间
});

module.exports = MessageSchema;


