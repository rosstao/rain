/**
 * Created by hetao on 2016/7/18.
 */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BloodPressureSchema = new Schema({
    name: String,   //名称
    diastolic: Number,  //舒张压
    systolic: Number,   //收缩压
    mean: Number,    //平均压
    pulse_rate: Number, //脉率
    create_at: {type: Date, default: Date.now},  //创建日期
    update_at: {type: Date, default: Date.now}  //更新时间
});

module.exports = BloodPressureSchema;

