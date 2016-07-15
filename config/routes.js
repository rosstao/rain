/**
 * Created by xuyx on 2016/7/12.
 */
'use strict';

const api = require('../routes/api');
const page = require('../routes/page');

module.exports = (app)=> {
    app.use('/', page);
    app.use('/api', api);
}