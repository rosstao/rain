/**
 * Created by xuyx on 2016/7/13.
 */
(()=> {
    'use strict';

    const config = require('../config/app_config');

    /**
     * 累计在线人数
     * @param req
     * @param res
     * @param next
     */
    const auth = (req, res, next)=> {
        if (req.session.counter) {
            req.session.counter++;
        } else {
            req.session.counter = 1;
        }
        next();
    }

    /**
     * 向客户端写入cookie
     * @param user  用户
     * @param req
     * @param res
     */
    const gen_session = (user, req, res)=> {
        let auth_token = user._id;
        let opts = {
            path: '/',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            signed: true,
            secure: false,
            httpOnly: false
        }
        res.cookie(config.AUTH_COOKIE_NAME, auth_token, opts);
    }

    /**
     * 验证登录
     * @param req
     * @param res
     * @param next
     * @returns {*}
     */
    const userRequired = (req, res, next)=> {
        if (!req.session || !req.session.user || !req.session.user._id) {
            return res.status(403).send('forbidden!');  //拒绝访问  请登录
        }
        next();
    }

    exports.auth = auth;
    exports.gen_session = gen_session;
    exports.userRequired = userRequired;
})();

