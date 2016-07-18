/**
 * Created by hetao on 2016/7/18.
 */
'use strict';

module.exports = (db)=> {
    return {
        Message: db.model('Message', require('./message'), 'message')
    }
}


