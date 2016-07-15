/**
 * Created by xuyx on 2016/7/15.
 */
'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('../../../controller/page').User;

router.get('/register',UserController.registerPage);
router.post('/register',UserController.register);

module.exports = router;