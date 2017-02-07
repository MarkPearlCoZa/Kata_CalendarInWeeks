var moment = require('moment');

module.exports = class Person {

    constructor(year = 2016) {
       this._year = year.toString();
    }

    startOfYear() {
        let start = moment(this._year + "-01-01") .clone().day(1);
        return start.date();
    }
}
