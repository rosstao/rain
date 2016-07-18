/**
 * Created by xuyx on 2016/7/15.
 */
(()=> {
    'use strict';

    const login = require('./login');
    const register = require('./register');

    exports.loginPage = login.loginPage;
    exports.login = login.login;
    exports.registerPage = register.registerPage;
    exports.register = register.register;
})()
