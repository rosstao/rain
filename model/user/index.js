/**
 * Created by xuyx on 2016/7/15.
 */
(()=>{
    'use strict';

    module.exports = (db)=> {
        return {
            User: db.model('User', require('./user'), 'user')
        }
    }
})()
