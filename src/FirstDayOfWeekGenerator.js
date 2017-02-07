var moment = require('moment');

module.exports = class firstDayOfWeekGenerator {

    constructor(year = 2016) {
       this._year = year.toString();
       this._firstDayOfYear = moment(this._year + "-01-01");
       this._startMondayOfYear = this._firstDayOfYear.clone().day("Monday");
    }

    startOfYear() {
        return this._startMondayOfYear.clone();
    }

    weekOf(weekNum) {
       return this._startMondayOfYear.clone().week(weekNum);
    }
}
