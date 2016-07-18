/**
 * Created by xuyx on 2016/7/15.
 */
(()=> {
    'use strict';

    const express = require('express');
    const router = express.Router();

    router.get('/logout', (req, res)=> {
        delete req.session.user;
        res.render('index', {title: 'Express'});
    })

    module.exports = router;
})()

