/**
 * Created by hetao on 2016/7/18.
 */
'use strict';

module.exports = (db)=> {
    return {
        BloodPressure: db.model('BloodPressure', require('./blood_pressure'), 'blood_pressure')
    }
}

