/**
 * Created by xuyx on 2016/7/15.
 */
(()=>{
    'use strict';

    const express = require('express');
    const router = express.Router();

    /**
     * 个人主页
     */
    router.get('/home', require('../../../middleware/auth').userRequired, (req, res)=> {
        res.render('home', {title: 'Home', name: req.session.user.name});
    })

    module.exports = router;
})()

