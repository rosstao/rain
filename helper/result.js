/**
 * Created by xuyx on 2016/7/14.
 */
(()=> {
    'use strict';

    module.exports = (error_code, message, option) => {
        return Object.assign({}, {error_code: error_code, message: message}, option);
    };
})()

