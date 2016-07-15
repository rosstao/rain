/**
 * Created by xuyx on 2016/7/14.
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,   //�û���
    real_name: String,  //����
    password: String,   //����
    age: Number,    //����
    birthday: {type: Date}, //��������
    create_at: {type: Date, default: Date.now}  //��������
});

module.exports = UserSchema;