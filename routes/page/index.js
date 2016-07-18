/**
 * Created by xuyx on 2016/7/12.
 */
(()=>{
    'use strict';

    const express = require('express');
    const router = express.Router();

    router.use('/user',require('./user'))

    module.exports = router;
})()

