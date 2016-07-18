/**
 * Created by xuyx on 2016/7/12.
 */
(()=>{
    'use strict';
    const mongoose = require('mongoose');
    const config = require('../config/app_config');
    const logger = require('../helper/logger');

    const db = mongoose.createConnection(config.MongoSettings.mongodbAddress + '/' + config.MongoSettings.mongodbName, {
        server: {poolSize: 20}
    }, (err)=> {
        if (err) {
            logger.error('connect to %s error: ', config.MongoSettings.mongodb, err.message);
            process.exit(1);
        }
    });

    exports.User = require('./user')(db);
})()



