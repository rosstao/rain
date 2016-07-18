/**
 * Created by xuyx on 2016/7/15.
 */
(()=>{
    'use strict';

    const express = require('express');
    const router = express.Router();

    router.use(require('./login'));
    router.use(require('./register'));
    router.use(require('./logout'));
    router.use(require('./home'));
    router.get('/', (req, res)=> {
        res.render('index', {title: 'Express'});
    })

    module.exports = router;
})()

