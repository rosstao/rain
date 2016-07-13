/**
 * Created by xuyx on 2016/7/12.
 */
'use strict';

const config = require('../config');
const env = process.env.NODE_ENV || "development";
const log4js = require('log4js');

log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: 'logs/rabbit.log', category: 'rabbit' }
    ]
});

var logger = log4js.getLogger('rabbit');
logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR')

module.exports = logger;
