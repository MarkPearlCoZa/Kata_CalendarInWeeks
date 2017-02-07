var moment = require('moment');

module.exports = class Person {

    constructor(year = 2016) {
       this._year = year.toString();
       this._startOfYear = moment(this._year + "-01-01") .clone().day(1);
    }

    startOfYear() {
        return this._startOfYear.clone().date();
    }

    weekOf(int weekNum) {
        
    }
}
